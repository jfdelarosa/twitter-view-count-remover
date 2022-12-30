const pkg = require("../package.json");

module.exports = function (manifest_version) {
  let manifest = {
    author: pkg.author,
    content_scripts: [
      {
        matches: ["https://*.twitter.com/*"],
        css: ["content.css"],
        js: ["content.js"],
        run_at: "document_end",
      },
    ],
    description: pkg.description,
    manifest_version,
    name: pkg.name,
    permissions: ["storage", "tabs"],
    version: pkg.version,
  };

  if (manifest_version == 2) {
    manifest = {
      ...manifest,
      background: {
        scripts: ["background.js"],
      },
      browser_action: {
        default_icon: "images/icon-16.png",
        default_popup: "popup.html",
      },
    };
  } else {
    manifest = {
      ...manifest,
      background: {
        service_worker: "background.js",
      },
      action: {
        default_icon: {
          16: "images/icon-16.png",
          24: "images/icon-24.png",
          32: "images/icon-32.png",
        },
        default_popup: "popup.html",
      },
    };
  }

  return JSON.stringify(manifest);
};
