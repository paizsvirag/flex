const express = require("express");
const fs = require('fs'); 
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

let data = [];
const newCardRegEx = new RegExp('(.+\n)+');
const filePath = path.resolve(__dirname, '../db/feladat1.txt');
const allData = {
    'cards': [],
}

data = fs.readFileSync(filePath, {encoding:'utf8', flag:'r'}).split("\r\n\r\n")

for(let card of data) {
    let temp = card.split("\r\n").join(" ");
    let singleCard = {};
    for(let pair of temp.split(' ')) {
        let [key, value] = pair.split(':');
        singleCard[key] = value;

    } 
    allData.cards.push(singleCard)
}

app.get("/api", (req, res) => {
    res.json({allData});
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});