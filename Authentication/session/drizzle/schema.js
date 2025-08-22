const drizzle = require('drizzle-orm/pg-core');

const userTable = drizzle.pgTable("users", {
    id: drizzle.integer().primaryKey().generatedByDefaultAsIdentity(),
    name: drizzle.varchar("name", {length: 255}).notNull(),
    email: drizzle.varchar("email", {length: 255}).notNull().unique(),
    age: drizzle.integer().notNull(),
    password: drizzle.varchar("password",{length:"255"}).notNull(),
    salt: drizzle.text().notNull(),
})

module.exports = {
    userTable
};