const { Router } = require("express");
const { 
  handlerAllWork,
  handlerOneWork,
  handlerDeleteWork,
  handlerCreateWork,
  handlerUpdateWork, } = require("./homework.controller");

const router = Router();



router.get("/", handlerAllWork);
router.get("/:id", handlerOneWork);
router.delete("/:id", handlerDeleteWork)
router.post("/", handlerCreateWork);
router.patch("/:id", handlerUpdateWork);

module.exports = router;
