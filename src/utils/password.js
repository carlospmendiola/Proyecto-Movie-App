import { hash, compare } from "bcrypt";

export const genHash = async password => {
  try {
    return await hash(password, 12);
  } catch (error) {
    throw error;
  }
};

export const compareHash = async (password, hash) => {
  try {
    return await compare(password, hash);
  } catch (error) {
    throw error;
  }
};
