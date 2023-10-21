const router = require("express").Router();

router.get("/create", (req, res) => {
  //   res.render("index");
  res.render("create");
});

module.exports = router;
