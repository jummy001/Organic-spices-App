import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: String,

  role: {
    type: String,
    enum: ["customer", "farmer", "admin"],
    default: "customer"
  }
})

export default mongoose.models.User ||
  mongoose.model("User", UserSchema)