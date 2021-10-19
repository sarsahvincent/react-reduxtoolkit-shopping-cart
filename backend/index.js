const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
    res.send("Welcome to our online shop API...")
});

app.get("/product", (req, res, next) => {
res.send([1,3,4])
})

const port = process.env.PORT || 5000
app.listen(port, console.log(`Server is runing on port ${port}`))