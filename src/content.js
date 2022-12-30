chrome.storage.sync.get("SHOW_COUNT", (result) => {
  document.body.classList.toggle("hide-count", !result.SHOW_COUNT);
});

chrome.runtime.onMessage.addListener((request) => {
  document.body.classList.toggle("hide-count", !request.SHOW_COUNT);
});
