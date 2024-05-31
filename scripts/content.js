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
    icon.style.width = '16px';
    icon.style.height = '16px';
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

window.onload = function () {
    var button = createIconButton('btnGetLead', '');
    button.addEventListener('click', async function () {
        const personInfo = getPersonInfo();
        console.log(personInfo);
        await chrome.runtime.sendMessage({
            type: 'add-lead',
            data: personInfo
        });
    });

    const interval = setInterval(() => {
        console.log('Waiting for container');
        const container = document.querySelector(ELEMENT_TOOLBAR);
        if (container) {
            container.insertBefore(button, container.firstChild);
            clearInterval(interval);
            console.log('Done');
        }
    }, 500);
}
