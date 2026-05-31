import { connect } from "mongoose";

export const dbConnect = async () => {
  try {
    await connect(process.env.MONGO_DB_URL);
    console.log("✔️  Connected to the Mongo Database");
  } catch (error) {
    console.log(error);
    throw "❌ Error connecting to the Mongo Database";
  }
};
