chrome.storage.onChanged.addListener(async (changes) => {
  for (let [key, { newValue }] of Object.entries(changes)) {
    if (key !== "SHOW_COUNT") {
      return;
    }

    const tabs = await chrome.tabs.query({
      url: "https://*.twitter.com/*",
    });

    tabs.forEach(async (tab) => {
      await chrome.tabs.sendMessage(tab.id, {
        SHOW_COUNT: newValue,
      });
    });
  }
});

chrome.runtime.onInstalled.addListener(async () => {
  await chrome.storage.sync.set({ SHOW_COUNT: false });
});
