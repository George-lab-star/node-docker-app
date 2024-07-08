const express = require("express");
const bodyParser = require("body-parser");
const fetch = async (...args) => {
    const { default: fetch } = await import("node-fetch");
    return fetch(...args);
};

const app = express();

const port = 3000;

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        authorization:
            "Apikey 12cf737238073ecf15c93205c7c6761ae97b48bc5891dce28d33d39d90b34278",
    },
};

const postOptions = {
    method: "POST",
    headers: {
        accept: "application/json",
        authorization:
            "Apikey 12cf737238073ecf15c93205c7c6761ae97b48bc5891dce28d33d39d90b34278",
    },
};

app.use(bodyParser.json());

app.get("/currencies", (req, res) => {
    fetch("https://min-api.cryptocompare.com/data/all/coinlist", options)
        .then((response) => response.json())
        .then((data) => {
            const currencyList = Object.values(data.Data).map(
                (currency) => currency.Symbol
            );
            res.send(currencyList);
        })
        .catch((error) => console.error("Ошибка при получении данных:", error));
});

app.post("/convert", (req, res) => {
    fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${req.body.fcurr}&tsyms=${req.body.tcurr}`,
        postOptions
    )
        .then((response) => response.json())
        .then((data) => {
            let result = req.body.amount * data[req.body.tcurr];
            //res.json({ result: result });
            //res.sendStatus(200);
            res.send(`${result}`)
        });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
