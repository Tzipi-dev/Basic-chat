import mongoose, { Schema, Document, Types } from "mongoose";
import { MassageDocument } from "./Massage";
import { UserDocument } from "./User";

export interface ChatDocument extends Document {
  participant1: UserDocument; // מזהה של משתמש
  participant2: UserDocument; // מזהה של משתמש
  unreadCount: number;
  messages?: MassageDocument[]; // מערך מזהים של מסרים
}

// הגדרת הסכמה
const chatSchema = new Schema<ChatDocument>({
  participant1: { type: Schema.Types.ObjectId, ref: "User", required: true },
  participant2: { type: Schema.Types.ObjectId, ref: "User", required: true },
  unreadCount: { type: Number, default: 0 },
  messages: [{ type: Schema.Types.ObjectId, ref: "Massage" }],
});

// יצירת המודל
const ChatModel = mongoose.model<ChatDocument>("Chat", chatSchema);

export default ChatModel;
