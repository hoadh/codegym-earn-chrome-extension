export const API_BASE_URL = 'https://earn.dev.codegym.vn/api';
export const EARN_BASE_URL = 'https://earn.dev.codegym.vn';
export const LEAD_DETAIL_URL = 'https://earn.dev.codegym.vn/dashboard/resources/leads/'; // Prod: https://board.earn.codegym.vn/leads?leadId=

export async function getAPI(entity) {
    const url = `${API_BASE_URL}/${entity}`;
    // const ACCESS_TOKEN = localStorage.getItem('access_token');
    const storage = await chrome.storage.sync.get("token");
    const ACCESS_TOKEN = storage.token;
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