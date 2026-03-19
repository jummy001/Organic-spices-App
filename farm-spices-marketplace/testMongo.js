import mongoose from "mongoose";

// Replace <username>, <password>, and <dbname> with your Atlas info
const uri = "mongodb+srv://jummytreasure_db_user:yLgEwbcoyhdLQ6To@marketplace.lm0dkxu.mongodb.net/spices_db?retryWrites=true&w=majority";

mongoose.connect(uri)
  .then(() => {
    console.log("✅ Successfully connected to MongoDB Atlas!");
    process.exit(0); // exit after success
  })
  .catch((err) => {
    console.error("❌ Connection error:", err.message);
    process.exit(1);
  });