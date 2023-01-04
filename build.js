const fs = require("fs");
const archiver = require("archiver");
const pkg = require("./package.json");
const copyFolder = require("./utils/copyFolder");
const buildManifest = require("./utils/buildManifest");

const manifest_version = process.argv.slice(2) == "2" ? 2 : 3;

copyFolder("./src/", "./dist/");
fs.writeFile("./dist/manifest.json", buildManifest(manifest_version), () => {});

const archive = new archiver("zip");
const output = fs.createWriteStream(
  `./build/build-${pkg.version}-mv${manifest_version}.zip`
);

archive.pipe(output);

archive.directory("./dist/", false);

archive.finalize();
