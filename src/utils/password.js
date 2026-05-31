const { hash, compare } = require("bcrypt");

const genHash = async password => {
  try {
    return await hash(password, 12);
  } catch (error) {
    throw error;
  }
};

const compareHash = async (password, hash) => {
  try {
    return await compare(password, hash);
  } catch (error) {
    throw error;
  }
};

module.exports = { genHash, compareHash };
