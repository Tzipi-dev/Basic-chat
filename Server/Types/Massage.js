const mongoose = require("mongoose");
const { Schema } = mongoose;

// הגדרת הסכמה
const massageSchema = new Schema({
  senderId: { type: Schema.Types.ObjectId, ref: "User", required: true },   // מזהה שולח
  receiverId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // מזהה מקבל
  content: { type: String, required: true },                                // תוכן ההודעה
  timestamp: { type: Date, default: Date.now },                             // חותמת זמן
  isRead: { type: Boolean, default: false },                                // האם נקרא
  type: {
    type: String,
    enum: ["text", "image", "video", "file", "audio", "imoji"],             // סוג הודעה
    default: "text",
  },
});

// יצירת המודל
const MassageModel = mongoose.model("Massage", massageSchema);

module.exports = MassageModel;
