const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "123",
    database: "agalar",
    host: "localhost",
    port: 5432
});
module.exports = pool;