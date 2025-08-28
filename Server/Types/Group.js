const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const groupSchema = new Schema({
  name: { type: String, required: true },
  avatarUrl: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
  createdAt: { type: Date, default: Date.now },
  description: { type: String },
  admin: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const GroupModel = mongoose.model("Group", groupSchema);

module.exports = GroupModel;
