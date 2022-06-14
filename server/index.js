const express = require("express");
const mariadb = require("mariadb");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const db = mariadb.createPool({
    user: "root",
    host: "localhost",
    password: "9811Wggi@",
    database: "movableshopDB",
});

app.post("/create", async (req, res) => {

    const productName = req.body.productName;
    const description = req.body.description;
    const price = req.body.price;
    try {
        const result = await db.query(
            "INSERT INTO products (productName, description , price) VALUES(?,?,?)",
            [productName, description, price,]
        );
        res.send("data inserted");
    } catch (err) {
        throw err;
    }
});

//api for send users
app.get("/employees", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM employees");
        res.send(result);
    } catch (err) {
        throw err;
    }
});

app.listen(3001, () => {
    console.log("Server is running");
});
