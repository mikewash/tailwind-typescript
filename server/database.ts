import mysql from 'mysql2';

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "01123581321!x",
    connectionLimit: 10,
    database: 'blog_database'
});

export default pool;
