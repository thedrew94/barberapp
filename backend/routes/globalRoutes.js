const express = require("express");
const router = express.Router();
const globalController = require("./../controllers/globalController");

router.get("/getShop", globalController.getShop);
router.get("/getShop/:shopID", globalController.getSingleShop);

module.exports = router;
