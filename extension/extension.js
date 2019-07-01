
const ANGULAR_HTML_URL = "../../frontend/dist/frontend/index.html";

chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({
        url: chrome.runtime.getURL(ANGULAR_HTML_URL)
    });
});