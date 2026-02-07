const express = require("express");
const cors = require("cors");
const analyze = require("./analyzer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/verify", (req, res) => {
    const { message } = req.body;
    const result = analyze(message.toLowerCase());
    res.json(result);
});

app.listen(3000, () => {
    console.log("InternVerify backend running on port 3000");
});
