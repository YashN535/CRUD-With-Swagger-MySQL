//MySQL Database Operation Defined In The userModel

const db = require("../config/db");

module.exports = {
  //Create a New User Using a Stored Procedure

  createUser: async (name, email, age) => {
    const [result] = await db.query("CALL CreateUser(?, ?, ?)", [
      name,
      email,
      age,
    ]);
    return result;
  },

  //Get All Users Using a Stored Procedure

  getAllUsers: async () => {
    const [rows] = await db.query("CALL GetAllUsers()");
    return rows[0];
  },

  //Get All Users By Id Using a Stored Procedure

  getUserById: async (id) => {
    const [rows] = await db.query("CALL GetUserById(?)", [id]);
    return rows[0];
  },

  //Update a User Using a Stored Procedure

  updateUser: async (id, name, email, age) => {
    const [result] = await db.query("CALL UpdateUser(?, ?, ?, ?)", [
      id,
      name,
      email,
      age,
    ]);
    return result;
  },

  //Delete a User Using a Stored Procedure

  deleteUser: async (id) => {
    const [result] = await db.query("CALL DeleteUser(?)", [id]);
    return result;
  },
};
