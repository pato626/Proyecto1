require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

console.log(DB_DEPLOY);

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false,
  native: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);

sequelize.models = Object.fromEntries(capsEntries);

const {} = sequelize.models;

//  Relaciones entre modelos
//  User.hasMany(Order)
//  Order.hasMany(User)
//
//  puede ser hasMany / hasOne / belongsTo

module.exports = {
  ...sequelize.models, // Para poder importar los modelos:  const { modelo1, modelo2 } = require("./db.js")
  conn: sequelize, // Para importar la conexion:  { conn } = require("./db.js");
};
