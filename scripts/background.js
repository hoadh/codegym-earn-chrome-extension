chrome.runtime.onMessage.addListener(
    function (request) {
        switch (request.type) {
            case 'add-lead':
                addLead(request.data);
                break;
            case 'save-earn-token':
                saveEarnToken(request.data);
                break;
        }
    });

function addLead(data) {
    console.log('Adding lead:', data);
    chrome.storage.sync.set({ lead: data, action: 'openLeadForm' });
    chrome.action.openPopup();
}

function saveEarnToken(token) {
    console.log('Saving earn token:', token);
    chrome.storage.sync.set({ token });
}