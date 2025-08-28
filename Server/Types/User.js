const mongoose = require("mongoose");
const { Schema } = mongoose;

// הגדרת הסכמה
const userSchema = new Schema({
  name: { type: String, required: true },
  avatarUrl: { type: String, required: true },
  isOnline: { type: Boolean, default: false },
  lastActive: { type: Date, default: Date.now },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String },
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  groups: [{ type: Schema.Types.ObjectId, ref: "Group" }],
});

// יצירת המודל
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
