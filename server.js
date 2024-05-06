// express 불러오기 및 사용하기
const express = require("express");
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');
const app = express();
require('dotenv').config();
require('dotenv').config({ path: '../.env' });


app.use(
    cors({
        origin: '*',
    })
)

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('nelp', )


const dbUrl = process.env.DB_URL;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PW;
const dbName = process.env.DATABASE;
const port = process.env.PORT;

//console.log(`${dbUrl}, ${dbUser}, ${dbPassword}, ${dbName}`);


app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

const connection = mysql.createConnection ({
    host: dbUrl,            // 데이터베이스 호스트
    user: dbUser,           // 데이터베이스 사용자 이름  
    password: dbPassword, //데이터베이스 비밀번호
    database: dbName, // 연결할 데이터베이스 이름
    //port: '3306',
});

const qs = require('qs');
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());

connection.connect((err) => {
    if (err) {
        return console.error('[Mysql 연결 에러] error: \n' + err.message);
    } else {
        app.listen(port, () => {
            console.log('MYSQL 연결 성공!');
            console.log('PersonPool 서버 8080 포트 연결 성공!');
        });
    }
});

app.get("/", (req, res) => {
    res.send("index 페이지 접속");
})

connection.query('SELECT * FROM LEVEL', (err, rows) => {
    if (err) throw err;
    console.log(rows);
})