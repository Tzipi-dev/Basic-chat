const mongoose = require("mongoose");
const { Schema } = mongoose;

// הגדרת הסכמה
const chatSchema = new Schema({
  participant1: { type: Schema.Types.ObjectId, ref: "User", required: true },
  participant2: { type: Schema.Types.ObjectId, ref: "User", required: true },
  unreadCount: { type: Number, default: 0 },
  messages: [{ type: Schema.Types.ObjectId, ref: "Massage" }],
});

// יצירת המודל
const ChatModel = mongoose.model("Chat", chatSchema);

module.exports = ChatModel;
