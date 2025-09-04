const express = require("express");
const router = express.Router();
const { createSubcategory } = require("../controllers/subcategory");

router.post("/", createSubcategory);

module.exports = router;
