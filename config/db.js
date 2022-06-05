const { Pool } = require("pg");

const db = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = db;