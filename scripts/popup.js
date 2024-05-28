// // popup.js
// console.log('popup.js loaded');
// document.addEventListener('DOMContentLoaded', function () {
//     console.log('DOM loaded');
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         var tab = tabs[0];
//         var title = tab.title;
//         console.log(title); // This will log the title to the console
//         // You can also display the title in your popup.html
//         document.getElementById('title').textContent = title;
//     });
// });