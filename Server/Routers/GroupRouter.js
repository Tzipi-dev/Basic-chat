const express = require("express");
const { 
  createGroup, 
  getAllGroups, 
  getGroupById, 
  updateGroup, 
  deleteGroup 
} = require('../Services/GroupCRUD'); // מייבאים את הפונקציות
const router = express.Router();

// CREATE - יצירת קבוצה חדשה
router.post("/", createGroup);

// READ - כל הקבוצות
router.get("/", getAllGroups);

// READ - קבוצה לפי ID
router.get("/:id", getGroupById);

// UPDATE - עדכון קבוצה
router.put("/:id", updateGroup);

// DELETE - מחיקת קבוצה
router.delete("/:id", deleteGroup);

module.exports = router;
