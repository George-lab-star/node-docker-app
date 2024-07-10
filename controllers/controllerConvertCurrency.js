const postOptions = {
    method: "POST",
    headers: {
        accept: "application/json",
        authorization:
            "Apikey 12cf737238073ecf15c93205c7c6761ae97b48bc5891dce28d33d39d90b34278",
    },
};

exports.convertCurrency = (req, res) => {
    fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${req.body.fcurr}&tsyms=${req.body.tcurr}`,
        postOptions
    )
        .then((response) => response.json())
        .then((data) => {
            let result = req.body.amount * data[req.body.tcurr];
            res.send(`${result}`);
        });
};
