const fs = require("fs");
const path = require("path");

let routesFiles = [];
let routes = [];

fs.readdirSync(path.join(__dirname, "/"))
  .filter((dir) => !dir.includes("."))
  .forEach((dir) => {
    fs.readdirSync(path.join(__dirname, `/${dir}`)).forEach((r) => {
      routesFiles.push(`/${dir}/${r}`);
    });
  });

routesFiles = routesFiles.filter((r) => {
  r.includes(".js");
});
routesFiles.forEach((r) => {
  routes.push(require(path.join(__dirname, r)));
});

module.exports = routes;
