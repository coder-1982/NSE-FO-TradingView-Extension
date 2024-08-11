document.getElementById('activate-button').addEventListener('click', () => {
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let activeTab = tabs[0];
        // Check if the URL matches where the content script is injected
        if (activeTab.url.includes('nseindia.com')) {
            // Send a message to the content script
            chrome.tabs.sendMessage(activeTab.id, { action: "modifyLinks" }, (response) => {
                if (chrome.runtime.lastError) {
                    console.error("Content script not found in this tab.");
                } else {
                    console.log("Content script activated.");
                }
            });
        } else {
            console.error("This page is not supported by the extension.");
        }
    });
});