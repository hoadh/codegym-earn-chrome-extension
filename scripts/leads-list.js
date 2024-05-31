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
        return `<a
            href="https://earn.dev.codegym.vn/dashboard/resources/leads/${lead.id}"
            class="list-group-item list-group-item-action">
            ${getText(lead.first_name) + ' ' + getText(lead.last_name) + ' (Người chăm sóc: ' + getText(lead.responsible_person) + ')'}
            </a>`;

    });
    return items;
}

function getText(text) {
    return text ? text : '';
}