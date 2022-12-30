const fs = require("fs");
const archiver = require("archiver");
const pkg = require("./package.json");

const archive = new archiver("zip");
const manifest_version = process.argv.slice(2) == "2" ? 2 : 3;
const output = fs.createWriteStream(
  `./dist/buld-${pkg.version}-mv${manifest_version}.zip`
);

const manifest = {
  author: pkg.author,
  content_scripts: [
    {
      matches: ["https://*.twitter.com/*"],
      css: ["content.css"],
      run_at: "document_end",
    },
  ],
  description: pkg.description,
  manifest_version,
  name: pkg.name,
  version: pkg.version,
};

archive.pipe(output);

archive.append("./src/content.css", {
  name: "content.css",
});

archive.append(JSON.stringify(manifest), {
  name: "manifest.json",
});

archive.finalize();
