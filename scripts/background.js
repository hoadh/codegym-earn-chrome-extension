chrome.runtime.onMessage.addListener(
    function (request) {
        switch (request.type) {
            case 'add-lead':
                addLead(request.data);
                break;
            case 'clear-data':
                clearData();
                break;
            case 'save-access-token':
                chrome.storage.sync.set({ token: request.data });
                break;
            case 'clear-access-token':
                chrome.storage.sync.set({ token: null });
                break;
        }
    });

function addLead(data) {
    chrome.storage.sync.set({ lead: data, action: 'openLeadForm' });
    chrome.action.openPopup();
}

function clearData() {
    chrome.storage.sync.set({ lead: {}, action: '' });
}
