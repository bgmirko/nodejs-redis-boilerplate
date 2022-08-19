import "reflect-metadata";
import express from "express";
import db from "./database/models";
import { usersRouter } from "./routes/userRoutes";
import { Bootstrap } from "./bootstrap";

const PORT = process.env.PORT ?? 3000;

const app = express();

const bootstrap = new Bootstrap();
bootstrap.bootstrap();

app.use(usersRouter);

app.get("/", (req, res) => {
    res.send("<h1>Hello from NodeJS</h1>")
})

app.listen(PORT, () => {
    db.sequelize.sync().then(() => {
        console.log(`App running on port ${PORT}`)
    });
})