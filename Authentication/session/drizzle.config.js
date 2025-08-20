const defineConfig = require('drizzle-kit').defineConfig;

const config = defineConfig({
    dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
    schema: './src/drizzle',
    out: './src/drizzle',
    dbCredentials: {
        url: 'postgres://admin:admin@localhost:5432/recap'
    }
})

module.exports = config;