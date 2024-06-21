const ELEMENT_PROFILE_DETAIL = 'div[data-pagelet="BizInboxContextCardDetail"]';
const ELEMENT_TOOLBAR = '.x78zum5.x13a6bvl.x2lwn1j.xeuugli.x2lah0s div .x5yr21d';
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

    // Insert script to the page
    // var script = document.createElement('script');
    // script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    // document.body.appendChild(script);
    

    waitForElement(ELEMENT_TOOLBAR, (element) => {
        var button = createIconButton('btnGetLead', '');
        element.insertBefore(button, element.firstChild);

        const contextMenu = 'contextId'
        const { top, left } = getOffset(button); // get position in page of button
        const contextualLayerRoot = createContextualLayerRoot(contextMenu, top + 40, left, createMenuItem('test1'), createMenuItem('test2'));
        contextualLayerRoot.style.display = 'none';
        document.body.appendChild(contextualLayerRoot);

        button.addEventListener('click', async function () {
            waitForElement(ELEMENT_PROFILE_DETAIL, () => {
                const personInfo = getPersonInfo();
                console.log(personInfo);
                chrome.runtime.sendMessage({
                    type: 'add-lead',
                    data: personInfo
                });
                toggleContextMenu(contextMenu);

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

function createContextualLayerRoot(contextId, top, left, ...menuItems) {
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
    nestedDiv7.className = 'x78zum5 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd xdt5ytf xdm93yi';
    nestedDiv7.setAttribute('role', 'menu');

    // Append menu items to the menu
    menuItems.forEach(item => {
        nestedDiv7.appendChild(item);
    });

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


function createContextualLayerRoot2() {
    // Create the outermost div
    var outerDiv = document.createElement('div');
    outerDiv.setAttribute('data-testid', 'ContextualLayerRoot');
    outerDiv.className = 'xu96u03 xm80bdy x10l6tqk x13vifvy xbqvh2t uiContextualLayerParent';
    outerDiv.style.position = 'absolute';
    outerDiv.style.transform = 'translate(578px, 200px)';
    outerDiv.setAttribute('data-ownerid', 'js_5u');

    // Create the first inner div
    var firstInnerDiv = document.createElement('div');
    firstInnerDiv.className = 'x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3 x15cq3s0 x1k70j0n';

    // Create the nested structure inside firstInnerDiv
    var nestedDiv1 = document.createElement('div');
    nestedDiv1.className = 'x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3';

    var nestedDiv2 = document.createElement('div');
    nestedDiv2.className = 'x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3';

    var nestedDiv3 = document.createElement('div');
    nestedDiv3.className = 'xw2csxc x1odjw0f xwib8y2 xh8yej3';

    var nestedDiv4 = document.createElement('div');
    nestedDiv4.className = 'xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1';

    var nestedDiv5 = document.createElement('div');
    nestedDiv5.className = 'xfm7qce x1rfucrr xz0p3kk x14wctza';

    var nestedDiv6 = document.createElement('div');
    nestedDiv6.className = 'x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3';

    var nestedDiv7 = document.createElement('div');
    nestedDiv7.className = 'x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xyqj3jm x5yr21d';

    var nestedDiv8 = document.createElement('div');
    nestedDiv8.className = '';
    nestedDiv8.setAttribute('data-sscoverage-ignore', 'true');
    nestedDiv8.style.paddingTop = '0px';

    var nestedDiv9 = document.createElement('div');
    nestedDiv9.className = 'x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94';

    var nestedDiv10 = document.createElement('div');
    nestedDiv10.className = 'x1iyjqo2';

    var nestedDiv11 = document.createElement('div');
    nestedDiv11.className = 'x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av';

    var label = document.createElement('label');
    label.id = 'js_5o';
    label.setAttribute('for', 'js_5n');

    var span = document.createElement('span');
    span.className = 'xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli';
    span.textContent = 'Assign to';

    label.appendChild(span);
    nestedDiv11.appendChild(label);
    nestedDiv10.appendChild(nestedDiv11);
    nestedDiv9.appendChild(nestedDiv10);
    nestedDiv8.appendChild(nestedDiv9);
    nestedDiv7.appendChild(nestedDiv8);
    nestedDiv6.appendChild(nestedDiv7);
    nestedDiv5.appendChild(nestedDiv6);
    nestedDiv4.appendChild(nestedDiv5);
    nestedDiv3.appendChild(nestedDiv4);
    nestedDiv2.appendChild(nestedDiv3);
    nestedDiv1.appendChild(nestedDiv2);

    var nestedDiv12 = document.createElement('div');
    nestedDiv12.className = 'x1lcm9me x1yr5g0i xo71vjh x5pf9jr x78zum5 xdt5ytf x1iyjqo2';

    var nestedDiv13 = document.createElement('div');
    nestedDiv13.className = 'x78zum5 xdt5ytf x1iyjqo2';

    var nestedDiv14 = document.createElement('div');
    nestedDiv14.className = 'x1iyjqo2';

    var nestedDiv15 = document.createElement('div');
    nestedDiv15.className = 'xh8yej3';

    var nestedDiv16 = document.createElement('div');
    nestedDiv16.className = 'x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1ypdohk xh8yej3 x1t137rt';
    nestedDiv16.setAttribute('role', 'combobox');
    nestedDiv16.setAttribute('tabindex', '0');
    nestedDiv16.setAttribute('aria-busy', 'false');
    nestedDiv16.setAttribute('aria-expanded', 'false');
    nestedDiv16.setAttribute('aria-haspopup', 'listbox');
    nestedDiv16.setAttribute('aria-invalid', 'false');
    nestedDiv16.setAttribute('aria-labelledby', 'js_5o js_5s');
    nestedDiv16.setAttribute('aria-owns', 'js_5r');
    nestedDiv16.id = 'js_5n';
    nestedDiv16.setAttribute('data-auto-logging-id', 'f208b86846758dc');

    var nestedDiv17 = document.createElement('div');
    nestedDiv17.className = 'x1n2onr6 xh8yej3';

    var nestedDiv18 = document.createElement('div');
    nestedDiv18.className = 'x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud xbsr9hj xm7lytj x1ykpatu xlu9dua x1w2lkzu';

    var nestedDiv19 = document.createElement('div');
    nestedDiv19.className = '';

    var nestedDiv20 = document.createElement('div');
    nestedDiv20.className = 'x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94';

    var nestedDiv21 = document.createElement('div');
    nestedDiv21.className = 'x6s0dn4 x78zum5 x1q0g3np x1a02dak x2lwn1j xeuugli x1iyjqo2 x19lwn94';

    var nestedDiv22 = document.createElement('div');
    nestedDiv22.className = 'x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94';

    var nestedDiv23 = document.createElement('div');
    nestedDiv23.className = 'xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xlyipyv xr4vacz x1gnnqk1 xbsr9hj x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu x15h3p50 x1gf4pb6 xh7izdl x10emqs4 x2yyzbt xu8dvwe xmi5d70 x1fvot60 xo1l8bm xxio538 x1iyjqo2 x6ikm8r x10wlt62';

    var span2 = document.createElement('div');
    span2.className = 'xmi5d70 x1fvot60 xo1l8bm xxio538 x1541jtf xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli';
    span2.id = 'js_5s';
    span2.textContent = 'Select someone from your business';

    nestedDiv23.appendChild(span2);
    nestedDiv22.appendChild(nestedDiv23);
    nestedDiv21.appendChild(nestedDiv22);
    nestedDiv20.appendChild(nestedDiv21);
    nestedDiv18.appendChild(nestedDiv19);
    nestedDiv18.appendChild(nestedDiv20);

    var nestedDiv24 = document.createElement('div');
    nestedDiv24.className = 'x3nfvp2 x120ccyz x1heor9g';
    nestedDiv24.setAttribute('role', 'presentation');

    var nestedDiv25 = document.createElement('div');
    nestedDiv25.className = 'xtwfq29';
    nestedDiv25.style.width = '16px';
    nestedDiv25.style.height = '16px';
    nestedDiv25.style.maskImage = 'url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/5pYGJjhKCWP.png?_nc_eui2=AeE7hUkj-cC23DyAolPPJ-ffNIyKNCr2Wxk0jIo0KvZbGXsaCN5k5wR_SddD7u97WD1cVP3DwgFW1D65Pb3845_y)';
    nestedDiv25.style.maskPosition = '0px -1066px';

    nestedDiv24.appendChild(nestedDiv25);
    nestedDiv18.appendChild(nestedDiv24);

    nestedDiv17.appendChild(nestedDiv18);
    nestedDiv16.appendChild(nestedDiv17);
    nestedDiv15.appendChild(nestedDiv16);
    nestedDiv14.appendChild(nestedDiv15);
    nestedDiv13.appendChild(nestedDiv14);
    nestedDiv12.appendChild(nestedDiv13);
    nestedDiv1.appendChild(nestedDiv12);

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