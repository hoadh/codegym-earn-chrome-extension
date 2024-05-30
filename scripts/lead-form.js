import { API_BASE_URL } from './common.js';
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
    // Assign to form
    document.getElementById('firstName').value = firstName;
    document.getElementById('lastName').value = lastName;
    document.getElementById('facebook').value = profileLink;

    // Get statuses
    const statuses = await getAPI('statuses');
    const statusOptions = createOptions(statuses);
    const statusSelect = document.getElementById('initialStatus');
    statusSelect.innerHTML = statusOptions.join('');
    const G1 = findIdByName('G1', statuses);
    statusSelect.value = G1 || statuses[0].id;

    // Get users
    const users = await getAPI('users');
    const userOptions = createOptions(users);
    const userSelect = document.getElementById('referredBy');
    userSelect.innerHTML = userOptions.join('');
    const user_id = localStorage.getItem('user_id');
    userSelect.value = user_id || users[0].id;

    // Get sources
    const sources = await getAPI('sources');
    const sourceOptions = createSourcesOptions(sources);
    const sourceSelect = document.getElementById('source');
    sourceSelect.innerHTML = sourceOptions.join('');

    // Get campaigns
    const campaigns = await getAPI('campaigns');
    const campaignOptions = createOptions(campaigns);
    const campaignSelect = document.getElementById('firstCampaign');
    campaignSelect.innerHTML = campaignOptions.join('');
    const chat_campaign_id = findIdByName('Nhắn tin', campaigns);
    campaignSelect.value = chat_campaign_id || campaigns[0].id;

}

function createOptions(list) {
    const options = list.map(item => {
        return `<option value="${item.id}">${item.name}</option>`;
    });
    return options;
}

function findIdByName(name, list) {
    const item = list.find(item => item.name === name);
    return item ? item.id : null;
}

function createSourcesOptions(sources) {
    const facebookSources = sources.filter(source => source.name.startsWith('Facebook'));
    const lowerPrioritySources = sources.filter(source => !source.name.startsWith('Facebook'));
    const finalSources = facebookSources.concat(lowerPrioritySources);
    const options = finalSources.map(source => {
        return `<option value="${source.id}">${source.name}</option>`;
    });
    return options;
}

async function getAPI(entity) {
    const url = `${API_BASE_URL}/${entity}`;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`
        }
    };
    const fetchRes = await fetch(url, options);
    const res = await fetchRes.json();
    return res.data;
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
    const description = document.getElementById('description').value;
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
        first_campaign: firstCampaign,
        description
    };
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