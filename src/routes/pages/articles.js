const route = require("express").Router();
const { fetchArticles, createArticle } = require("../../controllers/articles");

route.get("/", async (req, res) => {
  try {
    const articles = await fetchArticles();
    res.render("pages/articles", { articles });
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});

module.exports = route;
