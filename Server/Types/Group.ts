import mongoose, { Schema, Document, Types } from "mongoose";
import { UserDocument } from "./User";

export interface GroupDocument extends Document {
  name: string;
  avatarUrl: string;
  members: Types.ObjectId[]; // מערך מזהים של משתמשים
  createdAt: Date;
  description?: string;
  admin: Types.ObjectId; // מזהה של מנהל הקבוצה
}

// הגדרת הסכמה
const groupSchema = new Schema<GroupDocument>({
  name: { type: String, required: true },
  avatarUrl: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
  createdAt: { type: Date, default: Date.now },
  description: { type: String },
  admin: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

// יצירת המודל
const GroupModel = mongoose.model<GroupDocument>("Group", groupSchema);

export default GroupModel;
