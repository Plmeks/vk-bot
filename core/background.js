
// chrome.runtime.onInstalled.addListener(function(details){
//     if(details.reason == "install"){
//         //call a function to handle a first install
// 		chrome.tabs.create({'url' : 'https://goo.gl/7w7bMx'}, function (tab) { });
//     }else if(details.reason == "update"){
//         //call a function to handle an update
//     }
// });

// chrome.webNavigation.onCompleted.addListener(function(details) {
//     if (details.frameId === 0) {
//         var tabUrl = details.url;
//         if (tabUrl && tabUrl.indexOf("vk.com")) {
//             chrome.tabs.executeScript(details.tabId, {
//                 "file": "core/cs.js",
//                 allFrames: false
//             });
//         }
//     }
// });

// chrome.tabs.onCreated.addListener(injectStickerCSS);

// chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
//     if (info.status == 'complete') do_something(tab);
// });


// function injectStickerCSS(tab) {
//     var tabUrl = tab.url;
//     if (tabUrl && tabUrl.indexOf("vk.com") != -1) {
//         chrome.tabs.insertCSS(tab.id, {
//             file: "core/styles.css"
//         });
//     }
// }

chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
        if (tab.url !== undefined && tab.url.indexOf("vk.com/im") != -1 &&
        tab.url.indexOf("sel=") != -1 && changeInfo.status == "complete") {
            var currentTabId = "";
            chrome.tabs.query(
                { currentWindow: true, active: true },
                function (tabArray) {
                    currentTabId = tabArray[0].id;

                    chrome.tabs.insertCSS(currentTabId, {
                        file: "core/styles.css"
                    });
                    chrome.tabs.executeScript(currentTabId, {file: "core/jquery.js"});
                    chrome.tabs.executeScript(currentTabId, {file: "core/inject.js"});
                }
            );
        }
    }
);
