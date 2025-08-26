import mongoose, { Schema, Document, Types } from "mongoose";

export interface MassageDocument extends Document {
  senderId: Types.ObjectId;   // מזהה של משתמש שולח
  receiverId: Types.ObjectId; // מזהה של משתמש מקבל
  content: string;
  timestamp: Date;
  isRead: boolean;
  type: 'text' | 'image' | 'video' | 'file' | 'audio' | 'imoji';
}

// הגדרת הסכמה
const massageSchema = new Schema<MassageDocument>({
  senderId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  receiverId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false },
  type: { 
    type: String, 
    enum: ['text', 'image', 'video', 'file', 'audio', 'imoji'], 
    default: 'text' 
  },
});

// יצירת המודל
const MassageModel = mongoose.model<MassageDocument>("Massage", massageSchema);

export default MassageModel;
