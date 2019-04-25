const route = require("express").Router();

/**
 * Fetch all users
 */
route.get("/", (req, res) => {
  //
});

/**
 * Fetch a particular user
 */
route.get("/:id", (req, res) => {
    //
});

/**
 * Store a new user
 */
route.post("/", (req, res) => {
    //
});

module.exports = route;