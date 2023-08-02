const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "test",
    password: "mypassword",
    connectionLimit: 10
});
