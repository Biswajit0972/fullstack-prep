const {drizzle} = require("drizzle-orm/postgres-js");

const db = drizzle("postgres://postgres:admin@localhost:5432/recap");

module.exports = db;