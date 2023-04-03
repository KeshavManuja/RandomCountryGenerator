const express = require("express");
const { matrixMaker, majorityFinder } = require("./helper");
require("dotenv").config();


const app = express();
const port = process.env.PORT;

app.get('/', (req,res) => {
    let row = process.env.DEFAULT_ROW;
    let col = process.env.DEFAULT_COL;
    let matrix = matrixMaker(row, col);
    let ranks = [];
    for(let countrList of matrix) {
        let majorInRow = majorityFinder(countrList);
        if(majorInRow) ranks.push(majorInRow);
    }
    return res.send({matrix,ranks})
})

app.listen(port , () => {
    console.log(`Successfully connected to port: ${port}`)
})