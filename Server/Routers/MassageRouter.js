const express = require("express");
const { createMassage,getAllMassages,getMassageById,updateMassage ,deleteMassage} = require('../Services/MassageCRUD');
const router = express.Router();


// CREATE - יצירת מסר חדש
router.post("/", createMassage);

// READ - כל המסרים
router.get("/", getAllMassages);

// READ - מסר לפי ID
router.get("/:id", getMassageById);

// UPDATE - עדכון מסר
router.put("/:id", updateMassage);

// DELETE - מחיקת מסר
router.delete("/:id", deleteMassage);

module.exports = router;
