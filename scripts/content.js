const ELEMENT_PROFILE_DETAIL = 'div[data-pagelet="BizInboxContextCardDetail"]';
const ELEMENT_TOOLBAR = '.x78zum5.x13a6bvl.x2lwn1j.xeuugli.x2lah0s div .x5yr21d';

const API_BASE_URL = 'https://earn.codegym.vn/api';
const EARN_BASE_URL = 'https://earn.codegym.vn';
const LEAD_DETAIL_URL = 'https://board.earn.codegym.vn/leads?leadId='; // Staging/Dev: https://earn.dev.codegym.vn/dashboard/resources/leads/

async function getAPI(entity) {
    const data = await chrome.storage.sync.get("token");
    const ACCESS_TOKEN = data.token;

    const url = `${API_BASE_URL}/${entity}`;
    console.log(url);
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

function getText(text) {
    return text ? text : '';
}

function createLeadItem(list) {
    const items = list.map(lead => {
        const link = `${LEAD_DETAIL_URL}${lead.id}`;
        const text = `${getText(lead.first_name)} ${getText(lead.last_name)}`;
        return createMenuItemWithLink(text, link);
    })
    return items;
}

function getNoneLead() {
    return createMenuItem('Không tìm thấy lead! Hãy tạo mới ở menu phía trên.');
}

function getLoading() {
    return createMenuItem('Đang tìm...');
}

// Function to extract the person's information
function getPersonInfo() {
    // Get the container holding the information
    const container = document.querySelector(ELEMENT_PROFILE_DETAIL);

    let personInfo = {
        name: null,
        imageUrl: null,
        profileLink: null
    }
    if (container) {
        // Get the person's name
        const nameElement = container.querySelector('div[role="heading"]');
        const name = nameElement ? nameElement.textContent : null;

        // Get the person's image
        const imgElement = container.querySelector('img');
        const imageUrl = imgElement ? imgElement.src : null;

        // Get the profile link
        const linkElement = container.querySelector('a[role="link"]');
        const profileLink = linkElement ? linkElement.href : null;

        personInfo = {
            name: name,
            imageUrl: imageUrl,
            profileLink: profileLink
        };
    }
    return personInfo;
}

function createIconButton(buttonId) {
    // Create the main container div
    var mainDiv = document.createElement('div');
    mainDiv.id = buttonId;
    mainDiv.className = 'x1ypdohk x1rg5ohu xy13l1i xxymvpz _5bpf';

    // Create nested divs
    var div1 = document.createElement('div');
    div1.className = '_3bwv';

    var div2 = document.createElement('div');
    div2.className = '_3bwy';

    var div3 = document.createElement('div');
    div3.className = '_3bwx';

    var div4 = document.createElement('div');
    div4.className = 'x3nfvp2 x193iq5w xxymvpz';
    div4.setAttribute('role', 'none');

    var div5 = document.createElement('div');
    div5.className = 'x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1g2r6go x16e9yqp x12w9bfk x15406qy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1q00v2l xaatb59 x1qgsegg xo1l8bm xbsr9hj x1djdxrh x1y1aw1k xwib8y2 x1ye3gou xn6708d';
    div5.setAttribute('role', 'button');
    div5.setAttribute('tabindex', '0');
    div5.setAttribute('id', 'js_5q');

    // Create span and inner divs
    var span = document.createElement('span');
    span.className = 'xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3';

    var innerDiv1 = document.createElement('div');
    innerDiv1.className = 'x78zum5';

    var innerDiv2 = document.createElement('div');
    innerDiv2.className = 'x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s';
    innerDiv2.setAttribute('data-sscoverage-ignore', 'true');
    innerDiv2.textContent = 'CodeGym Leads';

    var innerDiv3 = document.createElement('div');
    innerDiv3.className = 'x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3';

    var innerDiv4 = document.createElement('div');
    innerDiv4.className = 'x3nfvp2 x2lah0s x1c4vz4f';

    var icon = document.createElement('i');
    icon.className = 'img';
    icon.setAttribute('alt', '');
    icon.setAttribute('data-visualcompletion', 'css-img');
    icon.style.backgroundImage = 'url("https://cdn.codegym.vn/wp-content/uploads/2018/07/icon-small-150x150.jpeg")';
    icon.style.backgroundSize = '100%';
    icon.style.width = '20px';
    icon.style.height = '20px';
    icon.style.backgroundRepeat = 'no-repeat';
    icon.style.display = 'inline-block';

    // Append all elements
    innerDiv4.appendChild(icon);
    innerDiv3.appendChild(innerDiv4);
    innerDiv1.appendChild(innerDiv2);
    innerDiv1.appendChild(innerDiv3);
    span.appendChild(innerDiv1);
    div5.appendChild(span);
    div4.appendChild(div5);
    div3.appendChild(div4);
    div2.appendChild(div3);
    div1.appendChild(div2);
    mainDiv.appendChild(div1);

    // Append the main container to the body
    return mainDiv;

}

function createCustomButton(id, title) {
    // Create the main div element
    var mainDiv = document.createElement('div');
    mainDiv.id = id;
    mainDiv.setAttribute('data-pagelet', 'BizInboxCtxButton');

    // Create the nested div structure
    var innerDiv1 = document.createElement('div');
    var innerDiv2 = document.createElement('div');
    var innerDiv3 = document.createElement('div');
    innerDiv3.className = 'x3nfvp2 x193iq5w xxymvpz';
    innerDiv3.setAttribute('role', 'none');

    // Create the button div
    var buttonDiv = document.createElement('div');
    buttonDiv.className = 'x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1g2r6go x16e9yqp x12w9bfk x15406qy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1q00v2l xaatb59 x1qgsegg xo1l8bm xbsr9hj x1djdxrh x1y1aw1k xwib8y2 x1pi30zi x1ye3gou';
    buttonDiv.setAttribute('role', 'button');
    buttonDiv.setAttribute('tabindex', '0');
    buttonDiv.id = 'js_62';

    // Create the span element
    var spanElement = document.createElement('span');
    spanElement.className = 'xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3';

    // Create the div inside span
    var spanDiv1 = document.createElement('div');
    spanDiv1.className = 'x78zum5';

    // Create the nested div structure inside span
    var spanDiv2 = document.createElement('div');
    spanDiv2.className = 'x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3';

    // Create the div containing the icon
    var iconDiv = document.createElement('div');
    iconDiv.className = 'x3nfvp2 x2lah0s x1c4vz4f';
    var icon = document.createElement('i');
    icon.className = 'img';
    icon.style.backgroundImage = 'url("https://cdn.codegym.vn/wp-content/uploads/2018/07/icon-small-150x150.jpeg")';
    icon.style.backgroundSize = '100%';
    icon.style.width = '16px';
    icon.style.height = '16px';
    icon.style.backgroundRepeat = 'no-repeat';
    icon.style.display = 'inline-block';
    iconDiv.appendChild(icon);

    // Create the div containing the button title
    var titleDiv = document.createElement('div');
    titleDiv.className = 'x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli';
    titleDiv.textContent = title;

    // Append elements to build the structure
    spanDiv2.appendChild(iconDiv);
    spanDiv2.appendChild(titleDiv);
    spanDiv1.appendChild(spanDiv2);
    spanElement.appendChild(spanDiv1);
    buttonDiv.appendChild(spanElement);
    innerDiv3.appendChild(buttonDiv);
    innerDiv2.appendChild(innerDiv3);
    innerDiv1.appendChild(innerDiv2);
    mainDiv.appendChild(innerDiv1);

    return mainDiv;
}

function insertBootstrapModal(modalId) {
    // Insert bootstrap modal into the page
    var modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = modalId;
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-labelledby', 'leadModalLabel');
    modal.setAttribute('aria-hidden', 'true');

    var modalDialog = document.createElement('div');
    modalDialog.className = 'modal-dialog';
    return modal;
}

window.onload = function () {
    
    waitForElement(ELEMENT_TOOLBAR, (element) => {
        var button = createIconButton('btnGetLead', '');
        element.insertBefore(button, element.firstChild);

        const loading = getLoading();
        const noneLead = getNoneLead();

        const contextMenu = 'contextId'
        const { top, left } = getOffset(button); // get position in page of button
        const id = 'nestedDiv7'
        const contextualLayerRoot = createContextualLayerRoot(contextMenu, top + 40, left, id);
        contextualLayerRoot.style.display = 'none';
        document.body.appendChild(contextualLayerRoot);

        const menu = document.getElementById(id);

        button.addEventListener('click', async function () {

            // clear old
            while (menu.firstChild) menu.removeChild(menu.firstChild);
            menu.appendChild(loading);
            showContextMenu(contextMenu);

            waitForElement(ELEMENT_PROFILE_DETAIL,async () => {
                const personInfo = getPersonInfo();
                console.log(personInfo);
                chrome.runtime.sendMessage({
                    type: 'add-lead',
                    data: personInfo
                });
                const profileLink = personInfo.profileLink;
                const leadRes = await getAPI('leads?search=' + profileLink);
                console.log(leadRes);
                const total = leadRes.total;

                hideContextMenu(contextMenu);

                // clear old
                while (menu.firstChild) menu.removeChild(menu.firstChild);

                if (total === 0) {
                    menu.appendChild(noneLead);
                } else {
                    const leads = leadRes.data;
                    const menuItems = createLeadItem(leads);
                    // add new menu items
                    menuItems.forEach(item => {
                        menu.appendChild(item);
                    });
                }
                
                toggleContextMenu(contextMenu);

                setTimeout(() => {
                    hideContextMenu(contextMenu);
                }, 2000);
            });
        });
        
    });
}

const CURRENT_CONTEXT_STATE = 'none';
function toggleContextMenu(contextId) {
    const contextMenu = document.getElementById(contextId);
    if (contextMenu.style.display === 'none') {
        contextMenu.style.display = 'block';
    } else {
        contextMenu.style.display = 'none';
    }
}

function showContextMenu(contextId) {
    const contextMenu = document.getElementById(contextId);
    contextMenu.style.display = 'block';
}

function hideContextMenu(contextId) {
    const contextMenu = document.getElementById(contextId);
    contextMenu.style.display = 'none';
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}


function waitForElement(selector, callback) {
    const interval = setInterval(() => {
        const element = document.querySelector(selector);
        if (element) {
            clearInterval(interval);
            callback(element);
        }
    }, 500);
}

function createMenuItemWithLink(text, link) {
    var menuItemDiv = document.createElement('div');
    menuItemDiv.setAttribute('aria-labelledby', 'js_7e');
    menuItemDiv.className = 'x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt';
    menuItemDiv.setAttribute('role', 'menuitem');
    menuItemDiv.setAttribute('tabindex', '0');

    var innerDiv1 = document.createElement('div');
    innerDiv1.className = 'x78zum5 x1iyjqo2';

    var innerDiv2 = document.createElement('div');
    innerDiv2.className = 'x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1v911su';

    var innerDiv3 = document.createElement('div');
    innerDiv3.className = 'x1iyjqo2 xamitd3';
    innerDiv3.setAttribute('data-sscoverage-ignore', 'true');

    var innerDiv4 = document.createElement('div');
    innerDiv4.className = 'x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli';

    var innerDiv5 = document.createElement('div');
    innerDiv5.className = 'xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2';
    innerDiv5.id = 'js_7e';

    var a = document.createElement('a');
    a.href = link;
    a.textContent = text;
    a.target = '_blank'; // open in new tab
    innerDiv5.appendChild(a);

    // Append elements to build the structure for the first menu item
    innerDiv4.appendChild(innerDiv5);
    innerDiv3.appendChild(innerDiv4);
    innerDiv2.appendChild(innerDiv3);
    innerDiv1.appendChild(innerDiv2);
    menuItemDiv.appendChild(innerDiv1);
    return menuItemDiv;
}

function createMenuItem(text) {
    var menuItemDiv = document.createElement('div');
    menuItemDiv.setAttribute('aria-labelledby', 'js_7e');
    menuItemDiv.className = 'x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt';
    menuItemDiv.setAttribute('role', 'menuitem');
    menuItemDiv.setAttribute('tabindex', '0');

    var innerDiv1 = document.createElement('div');
    innerDiv1.className = 'x78zum5 x1iyjqo2';

    var innerDiv2 = document.createElement('div');
    innerDiv2.className = 'x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1v911su';

    var innerDiv3 = document.createElement('div');
    innerDiv3.className = 'x1iyjqo2 xamitd3';
    innerDiv3.setAttribute('data-sscoverage-ignore', 'true');

    var innerDiv4 = document.createElement('div');
    innerDiv4.className = 'x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli';

    var innerDiv5 = document.createElement('div');
    innerDiv5.className = 'xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2';
    innerDiv5.id = 'js_7e';
    innerDiv5.textContent = text;

    // Append elements to build the structure for the first menu item
    innerDiv4.appendChild(innerDiv5);
    innerDiv3.appendChild(innerDiv4);
    innerDiv2.appendChild(innerDiv3);
    innerDiv1.appendChild(innerDiv2);
    menuItemDiv.appendChild(innerDiv1);
    return menuItemDiv;
}

function createContextualLayerRoot(contextId, top, left, menuListId) {
    // Create the outermost div
    var outerDiv = document.createElement('div');
    outerDiv.id = contextId;
    outerDiv.setAttribute('data-testid', 'ContextualLayerRoot');
    outerDiv.className = 'xu96u03 xm80bdy x10l6tqk x13vifvy xbqvh2t x889kno x1a8lsjc uiContextualLayerParent';
    outerDiv.style.position = 'absolute';
    outerDiv.style.left = `${left}px`;
    outerDiv.style.top = `${top}px`;
    // outerDiv.style.transform = `translate(${top}px, ${left}px)`;
    outerDiv.setAttribute('data-keydownable', '1');
    outerDiv.setAttribute('data-ownerid', 'js_5i');

    // Create the first inner div
    var firstInnerDiv = document.createElement('div');
    firstInnerDiv.className = 'x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1xp1s0c x5yr21d xh8yej3 x1mbqufl x6o7n8i xw7d9y7 x12w9bfk x1hc1fzr x1q2yuad';

    // Create the nested structure inside firstInnerDiv
    var nestedDiv1 = document.createElement('div');
    nestedDiv1.className = 'x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3';

    var nestedDiv2 = document.createElement('div');
    nestedDiv2.className = 'x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3';

    // var nestedDiv3 = document.createElement('div');
    // nestedDiv3.className = 'xw2csxc x1odjw0f xh8yej3 x18d9i69';

    var nestedDiv4 = document.createElement('div');
    nestedDiv4.className = 'xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1';

    var nestedDiv5 = document.createElement('div');
    nestedDiv5.className = 'x1iorvi4 x150jy0e xjkvuk6 x1e558r4 x9f619';
    nestedDiv5.id = 'js_3u';
    // nestedDiv5.style.minWidth = '40px';

    var nestedDiv6 = document.createElement('div');

    var nestedDiv7 = document.createElement('div');
    nestedDiv7.id = menuListId;
    nestedDiv7.className = 'x78zum5 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd xdt5ytf xdm93yi';
    nestedDiv7.setAttribute('role', 'menu');

    // Append menu items to the menu
    // menuItems.forEach(item => {
    //     nestedDiv7.appendChild(item);
    // });

    nestedDiv6.appendChild(nestedDiv7);
    nestedDiv5.appendChild(nestedDiv6);
    // nestedDiv3.appendChild(nestedDiv4);
    // nestedDiv2.appendChild(nestedDiv3);
    nestedDiv2.appendChild(nestedDiv5);

    var emptyDiv1 = document.createElement('div');
    emptyDiv1.className = 'xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5';

    var emptyDiv2 = document.createElement('div');
    emptyDiv2.className = 'x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x67dex8 x13vifvy';

    var emptyDiv3 = document.createElement('div');
    emptyDiv3.className = 'x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x1ta9b4f x1ey2m1c';

    // Append all elements to the first inner div
    nestedDiv1.appendChild(nestedDiv2);
    firstInnerDiv.appendChild(nestedDiv1);
    firstInnerDiv.appendChild(emptyDiv1);
    firstInnerDiv.appendChild(emptyDiv2);
    firstInnerDiv.appendChild(emptyDiv3);

    // Append the first inner div to the outermost div
    outerDiv.appendChild(firstInnerDiv);
    return outerDiv;
}
