'use strict';
const express = require("express")
const app = express()

/////////////////////////////////////////////////
// MySQL
/////////////////////////////////////////////////
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '172.16.20.10',
    user: 'root',
    password: '12345678',
    database: 'blogdb'
});

/////////////////////////////////////////////////
// 定义中间件(进阶)
/////////////////////////////////////////////////
const debug = (req, res, next) => {
    console.log("middleware.debug ->", req.method, req.url)
    next()
}
app.use(debug)

/////////////////////////////////////////////////
// 基础使用
/////////////////////////////////////////////////
// 默认根路径
app.get("/", (req, res) => {
    console.log("->", req.url)
    res.send("<h1>Helo 1</h1>")
})

// 返回json格式，API主用
app.get("/json", (req, res) => {
    res.json({
        result: 'ok'
    })
})

// 返回json格式，API主用
app.get("/blog", (req, res) => {
    connection.connect((err) => {
        if (err) {
            console.log('error connecting: ' + err.stack);
            return;
        }
        connection.query(
            'SELECT * FROM user', (error, results) => {
                console.log(results);
                res.json({
                    result: results
                })
            }
        );
    });
})

/////////////////////////////////////////////////
// 启动服务
/////////////////////////////////////////////////
const PORT = process.env.PORT || 3000
app.listen(PORT, (err) => {
    if (err) {
        console.error("我去，出错啦！",)
    }
    console.log("正常服务中...", "http://127.0.0.1:" + PORT)
})
