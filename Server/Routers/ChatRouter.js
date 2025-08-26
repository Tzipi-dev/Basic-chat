const express = require("express");
const { 
  createChat, 
  getAllChats, 
  getChatById, 
  updateChat, 
  deleteChat 
} = require('../Services/ChatCRUD'); // מייבאים את הפונקציות
const router = express.Router();

// CREATE - יצירת צ'אט חדש
router.post("/", createChat);

// READ - כל הצ'אטים
router.get("/", getAllChats);

// READ - צ'אט לפי ID
router.get("/:id", getChatById);

// UPDATE - עדכון צ'אט
router.put("/:id", updateChat);

// DELETE - מחיקת צ'אט
router.delete("/:id", deleteChat);

module.exports = router;
