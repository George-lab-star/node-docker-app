const controllerGetCurrencyList = require('../controllers/controllerGetCurrencyList.js');
const controllerConvertCurrency = require('../controllers/controllerConvertCurrency.js');
const signup = require('../controllers/controllerSignup.js');
const express = require('express');
const router = express.Router();

router.use(express.json())

router.post("/signup", signup.signup);

router.get("/currency/list", controllerGetCurrencyList.getCurrencyList);

router.post("/currency/convert", controllerConvertCurrency.convertCurrency);

module.exports = router;