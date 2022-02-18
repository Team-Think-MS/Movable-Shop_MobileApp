const express = require("express");
const app = express();
const mariadb = require("mariadb");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "9811Wggi@",
    database: "movableShopDB"
})

app.post('/task', async (req, res) => {
    console.log("ccgcn");
    const email = req.body.email;
    console.log(email);
});

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const result = await pool.query("INSERT INTO users (email, password) VALUES(?,?);",[email, password])
    res.send(result);
} catch (err) {
    throw err;
}
    
});


// GET
app.get('/tasks', async (req, res) => {
    try {
        const result = await pool.query("select * from users");
        res.send(result);
    } catch (err) {
        throw err;
    }
});



app.listen(3006, () => {
    console.log("runing on port 3006")
});
