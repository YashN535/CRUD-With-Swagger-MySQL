//To Handle User Related API Requests

const userModel = require("../models/userModel");

module.exports = {
  //Create a New User

  createUser: async (req, res) => {
    try {
      const { name, email, age } = req.body;
      await userModel.createUser(name, email, age);
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  //Get or Read User

  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers();
      res.status(201).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  //Get Or Read User By Id

  getUserById: async (req, res) => {
    try {
      const user = await userModel.getUserById(req.params.id);
      if (user.length === 0)
        return res.status(404).json({ message: "User not found" });
      res.json(user[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  //Update User By Id

  updateUser: async (req, res) => {
    try {
      const { name, email, age } = req.body;
      await userModel.updateUser(req.params.id, name, email, age);
      res.status(201).json({ message: "User updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete User By Id

  deleteUser: async (req, res) => {
    try {
      await userModel.deleteUser(req.params.id);
      res.status(201).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
