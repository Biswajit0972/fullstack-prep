const {drizzle} = require("drizzle-orm/node-postgres");


const db = drizzle("postgres://admin:admin@localhost:5432/recap");

module.exports = db;