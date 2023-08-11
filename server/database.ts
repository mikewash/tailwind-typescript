import mysql from "mysql2";
// import 'dotenv/config'
// require('dotenv').config({ path: '.env' })

// console.log(process.env.DB_HOST);
// export const getConnection = async () => {
//     return createConnection({
//         host: '127.0.0.1',
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME
//     })
// }

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'test',
    password: 'mypassword',
    connectionLimit: 10,
    database: 'blog_database'
});

export default pool;