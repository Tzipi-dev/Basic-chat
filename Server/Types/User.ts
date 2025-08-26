import mongoose, { Schema, Document, Types } from "mongoose";
import { ChatDocument } from "./Chat";
import { GroupDocument } from "./Group";
export interface UserDocument extends Document {
  name: string;
  avatarUrl: string;
  isOnline: boolean;
  lastActive: Date;
  email: string;
  phoneNumber?: string;
  friends?: ChatDocument[]; // מערך מזהי משתמשים
  groups?: GroupDocument[]; // מערך מזהי קבוצות
}

// הגדרת הסכמה
const userSchema = new Schema<UserDocument>({
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
const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
