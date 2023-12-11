const router = require("express").Router();
const cubeService = require("../services/cubeService.js");

router.get("/", async (req, res) => {
  const { search, from, to } = req.query;
  const cubes = await cubeService.getAll(search, from, to);

  const { user } = req;
  console.log({ user });
  res.render("index", { cubes, search, from, to });
});

router.get("/about", (req, res) => {
  //   res.render("index");
  res.render("about");
});

router.get("/404", (req, res) => {
  //   res.render("index");
  res.render("404");
});

module.exports = router;
