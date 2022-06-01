const express = require('express');
const data = require('./data.json');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.get("/", (req, res) => {
    res.send("hello la team!").status(200);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
