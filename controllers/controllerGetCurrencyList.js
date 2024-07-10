const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        authorization:
            "Apikey 12cf737238073ecf15c93205c7c6761ae97b48bc5891dce28d33d39d90b34278",
    },
};

exports.getCurrencyList = (req, res) => {
    fetch("https://min-api.cryptocompare.com/data/all/coinlist", options)
        .then((response) => response.json())
        .then((data) => {
            const currencyList = Object.values(data.Data).map(
                (currency) => currency.Symbol
            );
            res.send(currencyList);
        })
        .catch((error) => console.error("Ошибка при получении данных:", error));
};