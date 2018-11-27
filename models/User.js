const db = require("./db");

// declare a class named "User"
class User {
  // what properties should
  // a user start off with?
  // `constructor` is a mthod
  // that is automatically
  // called when you create a user
  constructor(name) {
    // define properties that
    // are also the names
    // of the database columns
    this.name = name;
  }
}

// CREATE
function add(name) {
  return db.one(
    `insert into users (name) 
        values 
            ($1)
            returning id
            `,
    [name]
  );
}

// RETRIEVE
function getAll() {
  return db.any(
    `select
        users.id, 
        users.name,
        t.name as todo,
        t.completed as completed
    from 
        users
        left join todos t
        on users.id = t.user_id`
  );
}

function getById(id) {
  return db.one("select * from users where id = $1", [id]);
}

function getTodosForUser(id) {
  return db.any(
    `
    select * from todos 
    where user_id = $1`,
    [id]
  );
}

// ========================================
// UPDATE
function updateName(id, name) {
  return db.result(
    `
    update users 
        set name=$2 
    where id=$1
    `,
    [id, name]
  );
}

// ========================================
// DELETE
function deleteById(id) {
  return db.result(
    `
  delete from users
  where id = $1
    `,
    [id]
  );
}

// ========================================
module.exports = User;
// {
//   add,
//   deleteById,
//   getAll,
//   getById,
//   getTodosForUser,
//   updateName,
//   User
// };
