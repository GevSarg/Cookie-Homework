const bcrypt = require("bcrypt");

class UsersController {
  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await req.app.locals.services.users.getUser(id);
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ msg: "An error occurred. Please try again." });
    }
  }

  async createUser(req, res) {
    try {
      const { fullname, email, password } = req.body;
      const file = req.file;

      const user = await req.app.locals.services.users.createUser(
        fullname,
        email,
        password,
        file
      );
      res.status(201).json(user);
    } catch (error) {
      console.error("Failed to add user:", error);
      res.status(500).json({ msg: "An error occurred. Please try again." });
    }
  }

  async loginUser(req, res) {
    try {
      const login = await req.app.locals.services.users.loginUser(req.body);

      res.cookie("userName", login.fullname, {
        httpOnly: true,
        maxAge: 5 * 60 * 1000,
      });

      res.status(200).json(login);
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ msg: "An error occurred. Please try again." });
    }
  }
}

module.exports = UsersController;
