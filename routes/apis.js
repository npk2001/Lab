const express = require("express");
const productController = require("../controllers/productController");
const clientController = require("../controllers/clientController");

//define a router and create routes
const router = express.Router();

//routes for dynamic processing of products
//-----------------------------------------------
//route for listing all products
router.get("/api/catalog", productController.getCatalogue);
router.get("/api/article/:id", productController.getProductByID);
router.post("/api/register", clientController.registerControl);
router.post("/api/login", clientController.loginControl);

//export router
module.exports = router;
