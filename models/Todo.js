const db = require("./db");

// CREATE
function add(name, completed) {
  return db.one(
    `insert into todos (name, completed) 
        values 
            ($1, $2)
            returning id
            `,
    [name, completed]
  );
}

// RETRIEVE
function getAll() {
  return db.any("select * from todos");
}

function getTodosForUser(id) {
  return db.any(
    `select * from todos
  where user_id = $1`,
    [id]
  );
}

function getById(id) {
  return db.one(`select * from todos where id = $1`, [id]).catch(err => {
    // no go
    // console.log("you got no todo");
    return {
      name: "no todo found."
    };
  });
}

// UPDATE

function assignToUser(todoId, userId) {
  return db.results(
    `update todos 
	    set user_id = $2
      where id = $1;`,
    [todoId, userId]
  );
}

function updateName(id, name) {
  return db.result(
    `update todos
    set name=$2 where id=$1`,
    [id, name]
  );
}

function updateCompleted(id, didComplete) {
  return db.result(
    `update todos
        set completed=$2 
        where id=$1`,
    [id, didComplete]
  );
}

function markCompleted(id) {
  //   return updateCompleted(id, true);
  return db.result(
    `update todos
                            set completed=$2
                        where id=$1`,
    [id, true]
  );
}

function markPending(id) {
  //   return updateCompleted(id, false);
  return db.result(
    `update todos
      set completed=$2
      where id=$1`,
    [id, false]
  );
}

// DELETE
function deleteById(id) {
  return db.result(`delete from todos where id = $1`, [id]);
}

module.exports = {
  add,
  assignToUser,
  deleteById,
  getAll,
  getById,
  markCompleted,
  markPending,
  updateName
};
