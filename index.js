const Todo = require("./models/Todo");

Todo.getAll().then(results => {
  console.log(results);
  console.log(`yesir those were the todos. neato.`);
});

// db.any("select * from todos").then(results => {
//   console.log(results);
// });

// Todo.getById(1).then(result => {
//   console.log(result);
// });

// Todo.getById(200).then(result => {
//   console.log(result);
// });

// Todo.add("pet the dog", false)
//   .catch(err => {
//     console.log(err);
//   })
//   .then(result => {
//     console.log(result);
//   });

// Todo.updateName(2, "buy new video games").then(result => {
//   console.log(result);
// });

// example of updating a row

// Todo.markCompleted(1).then(result => {
//   console.log(result);
// });

Todo.deleteById(1).then(result => {
  console.log(result.rowCount);
});
