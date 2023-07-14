const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "test",
    password: "mypassword",
    connectionLimit: 10
});

pool.query(`SELECT * FROM classicmodels.customers WHERE customerNumber = 103`, (err, res)=>{
  if(err){
    console.error(err);
  }
  else {
    console.log(res);  
  }
});