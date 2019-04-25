const models = require("../src/models/db");

async function seed() {
  try {
    await models.db.sync({ force: true });

    await models.User.bulkCreate([
      { username: "masud", password: "password" },
      { username: "kayes", password: "password" }
    ]);

    await models.Article.bulkCreate([
      {
        title: "Language Blog",
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
        authorId: 1
      },
      {
        title: "Fruits Blog",
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
        authorId: 1
      },
      {
        title: "Animals Blog",
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        authorId: 2
      }
    ]);
  } catch (e) {
    throw e;
  }
}

seed();
