export const connectDB = async () => {
  try {
    // Dummy database connection message
    console.log("Dummy Database Connected Successfully ✔");
  } catch (error) {
    console.log("Database Connection Failed ❌", error);
  }
};
