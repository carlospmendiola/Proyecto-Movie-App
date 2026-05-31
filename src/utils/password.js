const { hash } = require("bcrypt");

const genHash = async password => {
  try {
    return await hash(password, 12);
  } catch (error) {
    throw error;
  }
};

module.exports = { genHash };
