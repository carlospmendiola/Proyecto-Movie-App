import { connect } from "mongoose";

const MONGO_DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

export const dbConnect = async () => {
  try {
    await connect(MONGO_DB_URL);
    console.log("✔️  Connected to the Mongo Database");
  } catch (error) {
    console.log(error);
    throw "❌ Error connecting to the Mongo Database";
  }
};
