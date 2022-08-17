import express from "express";
import db from "./database/models";

const PORT = process.env.PORT ?? 3000;

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello from NodeJS</h1>")
})

app.listen(PORT, () => {
    db.sequelize.sync().then(() => {
        console.log(`App running on port ${PORT}`)
    });
})