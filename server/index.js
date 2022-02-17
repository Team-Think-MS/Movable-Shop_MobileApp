const express = require("express");
const app = express();
const mariadb = require("mariadb");
const cors = require("cors");
const bodyParser = require("body-parser")

const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "9811Wggi@",
    database: "movableShopDB"
})

app.post("/signin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    pool.query("INSERT INTO users (email, password) VALUES(?,?);",
        [email, password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.listen(3006, () => {
    console.log("runing on port 3001")
});
