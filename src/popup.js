const tweet = `Just installed this new Chrome extension that removes the view count on tweets.
Twitter looks so much cleaner now!
https://chrome.google.com/webstore/detail/twitter-view-count-remove/kacedphpmelngnhgodfbnemedkbbiajj
#ChromeExtension #Twitter`;

const link = document.querySelector("a");
link.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
  tweet
)}`;
