const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const PORT = 4000;
const app = express();

app.use(morgan("dev"));
app.use(cors());

app.listen(PORT, () => {
    console.log(`🐰http://localhost:${PORT} ruby_talk_clone2 SERVER START⭐️🐰`)
})