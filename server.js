const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

//file을 읽어 온다.
const data = fs.readFileSync('./database.json');

//읽어온 파일을 파싱하여 정보를 얻는다.
const conf = JSON.parse(data);
const mysql = require('mysql');


//DB 접속정보 저장.
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

//data 베이스에 접속
connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    connection.query(
      "SELECT * FROM CUSTOMER",
      (err, rows, fields) => {
        console.log(err);
        res.send(rows);
      }
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));

