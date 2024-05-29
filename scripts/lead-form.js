const API_BASE_URL = 'https://earn.dev.codegym.vn/api';
const ACCESS_TOKEN = localStorage.getItem('access_token');

document.getElementById('saveLead').addEventListener('click', saveLead);
document.getElementById('switchName').addEventListener('click', function () {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    document.getElementById('firstName').value = lastName;
    document.getElementById('lastName').value = firstName;
});

window.onload = async function () {
    const data = await chrome.storage.sync.get("lead");
    console.log(data);

    // Split name to first name and last name
    const name = data.lead.name;
    const lastSpaceIndex = name.lastIndexOf(' ');
    const firstName = name.substring(0, lastSpaceIndex);
    const lastName = name.substring(lastSpaceIndex + 1);
    const profileLink = data.lead.profileLink;
    console.log('First name:', firstName);
    console.log('Last name:', lastName);
    // Assign to form
    document.getElementById('firstName').value = firstName;
    document.getElementById('lastName').value = lastName;
    document.getElementById('facebook').value = profileLink;

    // Get statuses
    const statuses = await getStatus();
    console.log('Statuses:', statuses);
    const statusOptions = createStatusOptions(statuses);
    const statusSelect = document.getElementById('initialStatus');
    statusSelect.innerHTML = statusOptions.join('');
    statusSelect.value = statuses[0].id;

    // Get users
    const users = await getUsers();
    console.log('Users:', users);
    const userOptions = createUsersOptions(users);
    const userSelect = document.getElementById('referredBy');
    userSelect.innerHTML = userOptions.join('');
    const user_id = localStorage.getItem('user_id');
    userSelect.value = user_id || users[0].id;

    // Get sources
    const sources = await getSourses();
    console.log('Sources:', sources);
    const sourceOptions = createSourcesOptions(sources);
    const sourceSelect = document.getElementById('source');
    sourceSelect.innerHTML = sourceOptions.join('');
    // sourceSelect.value = sources[0].id;

    // Get campaigns
    const campaigns = await getCamapigns();
    console.log('Campaigns:', campaigns);
    const campaignOptions = createCampaignsOptions(campaigns);
    const campaignSelect = document.getElementById('firstCampaign');
    campaignSelect.innerHTML = campaignOptions.join('');
    // campaignSelect.value = campaigns[0].id;

}

async function getStatus() {
    const url = `${API_BASE_URL}/statuses`;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`
        }
    };
    const fetchRes = await fetch(url, options);
    const res = await fetchRes.json();
    console.log(res);
    return res.data;
}

function createStatusOptions(statuses) {
    const options = statuses.map(status => {
        return `<option value="${status.id}">${status.name}</option>`;
    });
    return options;
}

async function getUsers() {
    const url = `${API_BASE_URL}/users`;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`
        }
    };
    const fetchRes = await fetch(url, options);
    const res = await fetchRes.json();
    console.log(res);
    return res.data;

}

function createUsersOptions(users) {
    const options = users.map(user => {
        return `<option value="${user.id}">${user.name}</option>`;
    });
    return options;
}

async function getSourses() {
    const url = `${API_BASE_URL}/sources`;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`
        }
    };
    const fetchRes = await fetch(url, options);
    const res = await fetchRes.json();
    console.log(res);
    return res.data;
}

function createSourcesOptions(sources) {
    const options = sources.map(source => {
        return `<option value="${source.id}">${source.name}</option>`;
    });
    return options;
}

async function getCamapigns() {
    const url = `${API_BASE_URL}/campaigns`;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`
        }
    };
    const fetchRes = await fetch(url, options);
    const res = await fetchRes.json();
    console.log(res);
    return res.data;
}

function createCampaignsOptions(campaigns) {
    const options = campaigns.map(campaign => {
        return `<option value="${campaign.id}">${campaign.name}</option>`;
    });
    return options;
}

async function saveLead() {
    document.getElementById('info').innerHTML = ''; // Clear previous error messages
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const initialStatus = document.getElementById('initialStatus').value;
    const referredBy = document.getElementById('referredBy').value;
    const source_id = document.getElementById('source').value;
    const firstCampaign = document.getElementById('firstCampaign').value;
    const salutation = document.getElementById('salutation').value;
    const facebook = document.getElementById('facebook').value;
    const gender = document.getElementById('gender').value;
    const url = `${API_BASE_URL}/leads`;
    const data = {
        first_name: firstName,
        last_name: lastName,
        salutation,
        email,
        phone,
        referred_by: referredBy,
        source_id,
        initial_status_id: initialStatus,
        facebook,
        gender,
        first_campaign: firstCampaign
    };
    alert(JSON.stringify(data));
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ACCESS_TOKEN}`
        },
        body: JSON.stringify(data)
    };
    const fetchRes = await fetch(url, options);
    const res = await fetchRes.json();
    alert(JSON.stringify(res));
    if (res.status) {
        alert('Lưu thông tin Lead thành công!');
        window.close();
    } else {
        // check is res.message is an object or string
        if (typeof res.message === 'string') {
            document.getElementById('info').innerHTML = 'Lưu thông tin Lead thất bại. Lỗi: ' + res.message;
            return;
        } else {
            const fields = Object.keys(res.message);
            const messages = fields.map(field => 'Lỗi ' + field + ': ' + res.message[field] + '<br/>\n');
            document.getElementById('info').innerHTML = 'Lưu thông tin Lead thất bại. Lỗi: <br/>\n' + messages.join('');
        }
    }
}