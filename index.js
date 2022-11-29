const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./fontend/build"));
}

app.get("/", (req, res) => {
  res.json("this is back end");
});

app.get("/dishes", (req, res) => {
  const q = "SELECT * FROM dishes";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/addDish", (req, res) => {
  const q =
    "INSERT INTO dishes (`title`,`description`,`price`,`image`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.image,
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("Dish added successful.");
  });
});

app.delete("/dish/:id", (req, res) => {
  const dishID = req.params.id;
  const q = "DELETE FROM dishes WHERE id = ?";

  db.query(q, [dishID], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("Dish delete successful.");
  });
});

app.post("/dish/:id", (req, res) => {
  const dishID = req.params.id;
  const q =
    "UPDATE dishes SET `title`=?, `description`=?, `price`=?, `image`=? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.image,
    // "Updated title",
    // "Updated description",
    // 15.99,
    // "UpdatedIMG.jpg"
  ];

  db.query(q, [...values, dishID], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("Dish updated successful.");
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./fontend/build", "index.html"));
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});
