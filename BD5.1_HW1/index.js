/*
Packages are installed using the command:

npm install express sequelize sqlite3 // or by adding dependencies directly from dependencies tab
*/
let express = require("express");
let app = express();
let port = 3000;
// Import the post model and Sequelize instance from the previously defined paths
let post = require("./models/post.model");
let { sequelize_instance } = require("./lib/index");
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
/*
Make your own array of dummy data. The datatype of this array of objects should match that of the model. You can refer the dummy data of BD5.1_CW for examples



Seeding the database with data

Create an express server with an endpoint /seed_db which will seed the database with dummy data

Declare a variable named posts which will contain an array of objects with dummy posts.

Populate the variable posts with dummy post-data.

Use the model post and bulkCreate method to seed dummy data into the database file whenever the user visits the /seed_db endpoint.
*/
let posts = [
  {
    name: "John Doe",
    author: "Jane Smith",
    title: "Understanding JavaScript",
    content: "JavaScript is a powerful language used for web development...",
  },
  {
    name: "Alice Johnson",
    author: "Bob Brown",
    title: "Exploring Python",
    content:
      "Python is a versatile language favored for its ease of use and readability...",
  },
  {
    name: "Charlie Davis",
    author: "Cathy Wilson",
    title: "Introduction to Node.js",
    content:
      "Node.js is a runtime environment that allows for server-side scripting...",
  },
  {
    name: "Diana Evans",
    author: "Evan Thomas",
    title: "Basics of Machine Learning",
    content:
      "Machine learning is a fascinating field that involves the study of algorithms...",
  },
];

app.get("/", (req, res) => {
  res.status(200).json({ message: "BD5.1 - HW1" });
});
// end point to see the db
app.get("/seed_db", async (req, res) => {
  try {
    // Synchronize the database, forcing it to recreate the tables if they already exist
    await sequelize_instance.sync({ force: true });

    // Bulk create entries in the post table using predefined data
    await post.bulkCreate(posts);
    // Send a 200 HTTP status code and a success message if the database is seeded successfully
    res.status(200).json({ message: "Database Seeding successful" });
  } catch (error) {
    // Send a 500 HTTP status code and an error message if there's an error during seeding

    console.log("Error in seeding db", error.message);
    return res.status(500).json({
      code: 500,
      message: "Error in seeding db",
      error: error.message,
    });
  }
});
