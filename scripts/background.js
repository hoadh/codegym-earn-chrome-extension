chrome.runtime.onMessage.addListener(
    function (request) {
        switch (request.type) {
            case 'add-lead':
                return addLead(request.data);
            case 'remove-lead':
                break;
        }
    });

function addLead(data) {
    console.log('Adding lead:', data);
    var leads = [];
    leads.push(data);
    return 'ok';
}
