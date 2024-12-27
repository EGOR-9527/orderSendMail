require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./router/index.js");

PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const start = async () => {

    try {

        app.listen(PORT, () => console.log("Сервер запущен на порту: ", PORT))

    }catch(e){

        console.error("Ошибка: ", e);

    }

}

start()