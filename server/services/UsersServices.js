const bcrypt = require("bcrypt");

class UsersServices {
  constructor(models) {
    this.models = models;
  }
  async getUser(id) {
    try {
      const user = await this.models.users.findById(id);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createUser(fullname, email, password, file) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new this.models.users({
        fullname,
        email,
        password: hashedPassword,
        image: file.filename,
      });
      const doc = await user.save();
      return doc;
    } catch (error) {
      throw new Error(error);
    }
  }

  async loginUser(body) {
    try {
      const user = await this.models.users.findOne({ email: body.email });
      if (!user) {
        throw new Error("User not found");
      }

      const isMatch = await bcrypt.compare(body.password, user.password);
      if (!isMatch) {
        throw new Error("Invalid password");
      }

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UsersServices;
