// express 불러오기 및 사용하기
const express = require("express");
const app = express();
const port = 3306;

//http 서버 실행
app.listen(port, () => {
    console.log("서버 정상적으로 실행됨");
})

app.get("/", (req, res) => {
    response.send("성공");
})