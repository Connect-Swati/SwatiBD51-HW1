/*

Creating Models

Create a folder named models and create a file inside this folder named post.model.js

Import the sequelize instance & DataTypes from the /lib/index.js file

Define a model named post with the columns name as TEXT, author as TEXT, title as TEXT, content as TEXT

Export the model from the file

*/

const { sequelize_instance, DataTypes } = require("../lib/index");
// Defines a model representing the 'post' table with its structure
const post = sequelize_instance.define("post", {
  name: DataTypes.TEXT,
  author: DataTypes.TEXT,
  title: DataTypes.TEXT,
  content: DataTypes.TEXT,
});
// Makes the post model available elsewhere in the application
module.exports = post;
