import { LEAD_DETAIL_URL, EARN_BASE_URL, getAPI } from './common.js';

window.onload = async function () {
    const data = await chrome.storage.sync.get("lead");
    const profileLink = data.lead.profileLink;
    const leadRes = await getAPI('leads?search=' + profileLink);
    const total = leadRes.total;
    if (total === 0) {
        alert('Không tìm thấy lead');
        return;
    }
    const leads = leadRes.data;
    const leadItems = createLeadItem(leads);
    const userSelect = document.getElementById('leadsList');
    userSelect.innerHTML = leadItems.join('');
    chrome.runtime.sendMessage({ type: 'clear-data' });
    loading.style.display = 'none';
}

document.getElementById('logout').addEventListener('click', function (e) {
    // localStorage.removeItem('access_token');
    chrome.runtime.sendMessage({ type: 'clear-access-token' });
    window.location.href = 'popup.html';
  });

function createLeadItem(list) {
    const items = list.map(lead => {
        return `<li class="m-1">
        <div class="btn-group" role="group">
            <a type="button" class="btn btn-outline-primary"
                href="${LEAD_DETAIL_URL}${lead.id}"
                class="list-group-item list-group-item-action">
                    ${getText(lead.first_name)} ${getText(lead.last_name)}
                    <span class="badge rounded-pill bg-danger">${lead.status}</span>
            </a>
            <a href="${EARN_BASE_URL}/dashboard/resources/users/${lead.referred_by}" type="button" class="btn btn-outline-primary">
            Người chăm sóc: ${getText(lead.responsible_person)}
            </a>
        </div></li>`;
    });
    return items;
}

function getText(text) {
    return text ? text : '';
}