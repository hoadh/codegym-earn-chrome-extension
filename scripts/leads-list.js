import { getAPI } from './common.js';

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
}

function createLeadItem(list) {
    const items = list.map(lead => {
        return `<li>
        <div class="btn-group" role="group">
            <a type="button" class="btn btn-outline-primary"
                href="https://earn.dev.codegym.vn/dashboard/resources/leads/${lead.id}"
                class="list-group-item list-group-item-action">
                    ${getText(lead.first_name)} ${getText(lead.last_name)}
                    <span class="badge rounded-pill bg-danger">${lead.status}</span>
            </a>
            <a href="https://earn.dev.codegym.vn/dashboard/resources/users/${lead.referred_by}" type="button" class="btn btn-outline-primary">
            Người chăm sóc: ${getText(lead.responsible_person)}
            </a>
        </div></li>`;
    });
    return items;
}

function getText(text) {
    return text ? text : '';
}