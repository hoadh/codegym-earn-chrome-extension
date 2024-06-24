chrome.runtime.onMessage.addListener(
    function (request) {
        switch (request.type) {
            case 'add-lead':
                addLead(request.data);
                break;
            case 'clear-data':
                clearData();
                break;
            case 'save-earn-token':
                saveEarnToken(request.data);
                break;
            case 'clear-earn-token':
                clearEarnToken();
                break;
        }
    });

function addLead(data) {
    chrome.storage.sync.set({ lead: data, action: 'openLeadForm' });
    // chrome.action.openPopup();
}

function clearData() {
    chrome.storage.sync.set({ lead: {}, action: '' });
}

function saveEarnToken(token) {
    console.log('Saving earn token:', token);
    chrome.storage.sync.set({ token });
}

function clearEarnToken() {
    chrome.storage.sync.set({ token: '' });
}
