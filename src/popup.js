const tweet = `Just installed this new Chrome extension that removes the view count on tweets.
Twitter looks so much cleaner now!
https://chrome.google.com/webstore/detail/twitter-view-count-remove/kacedphpmelngnhgodfbnemedkbbiajj
#ChromeExtension #Twitter`;

const link = document.querySelector("a");
link.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
  tweet
)}`;

chrome.storage.sync.get("SHOW_COUNT", (result) => {
  document.querySelector("input").checked = !result.SHOW_COUNT;
});

document.querySelector("input").addEventListener("change", async (e) => {
  await chrome.storage.sync.set({ SHOW_COUNT: !e.target.checked });
});
