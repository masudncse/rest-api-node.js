const { fetchArticles, createArticle } = require("../../controllers/articles");
const route = require("express").Router();

/**
 * Fetch all articles
 */
route.get("/", async (req, res) => {
  const articles = await fetchArticles();
  res.status(200).json(articles);
});

/**
 * Store an article
 */
route.post("/", async (req, res) => {
  const article = await createArticle(req.body.title, req.body.content, 1);
  res.send(article);
});

/**
 * Fetch a particular article
 */
route.get("/:id", async (req, res) => {
  //
});

/**
 * Fetch comments of particular article
 */
route.get("/:id/comments", async (req, res) => {
  //
});

module.exports = route;
