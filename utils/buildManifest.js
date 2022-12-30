const pkg = require("../package.json");

module.exports = function (manifest_version) {
  const manifest = {
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
    manifest.browser_action = {
      default_popup: "popup.html",
    };
  } else {
    manifest.action = {
      default_popup: "popup.html",
    };

    manifest.background = {
      service_worker: "background.js",
    };
  }

  return JSON.stringify(manifest);
};
