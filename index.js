require("dotenv").config();

const Todo = require("./models/Todo");
const User = require("./models/User");

// User.getTodosForUser(3).then(result => {
//   console.log(result);
// });

// Todo.assignToUser(2, 2).then(() => {
//   User.getTodosForUser(2).then(result => {
//     console.log(result);
//   });
// });

User.getAll().then(results => {
  console.log(results);
  console.log(`yesir those were the users. neato.`);
});

// db.any("select * from todos").then(results => {
//   console.log(results);
// });

// User.getById(2).then(result => {
//   console.log(result);
// });

// Todo.getById(200).then(result => {
//   console.log(result);
// });

// User.add("jeff").then(result => {
//   console.log(result);
// });

// Todo.add("pet the dog", false)
//   .catch(err => {
//     console.log(err);
//   })
//   .then(result => {
//     console.log(result);
//   });

// User.updateName(6, "Jeeves").then(result => {
//   console.log(result);
// });

// example of updating a row

// Todo.markCompleted(1).then(result => {
//   console.log(result);
// });

// User.deleteById(6).then(result => {
//   console.log(result.rowCount);
// });
