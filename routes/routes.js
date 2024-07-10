const controllerGetCurrencyList = require('./controllers/controllerGetCurrencyList.js');
const controllerConvertCurrency = require('./controllers/controllerConvertCurrency.js');
const express = require('express');
const router = express.Router();

router.get("/currency/list", controllerGetCurrencyList.getCurrencyList);

router.get("/currency/convert", controllerConvertCurrency.convertCurrency);