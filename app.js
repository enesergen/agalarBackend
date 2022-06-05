require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require('./config/router');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor.`)
});