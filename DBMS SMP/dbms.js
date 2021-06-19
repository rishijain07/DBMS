var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "firstdatabase"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT *FROM Hospital", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
