import path from "path";
import fs from "fs";

const models = [];

const modulesDir = path.join(__dirname, "..", "modules");
const modulesFolders = fs
  .readdirSync(modulesDir)
  .filter((folder) => fs.statSync(path.join(modulesDir, folder)).isDirectory());

modulesFolders.forEach((folder) => {
  const routeFile = path.join(modulesDir, folder, `${folder}Model.js`);
  if (fs.existsSync(routeFile)) {
    models.push(routeFile);
  }
});

console.log(models);
