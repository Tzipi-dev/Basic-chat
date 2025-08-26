const Massage = require("./models/Massage");

// CREATE - יצירת מסר חדש
async function createMassage(data) {
  try {
    const newMassage = new Massage(data);
    const savedMassage = await newMassage.save();
    return savedMassage;
  } catch (err) {
    throw new Error(err.message);
  }
}

// READ - קבלת כל המסרים
async function getAllMassages() {
  try {
    const massages = await Massage.find().populate("senderId receiverId");
    return massages;
  } catch (err) {
    throw new Error(err.message);
  }
}

// READ - קבלת מסר לפי ID
async function getMassageById(id) {
  try {
    const massage = await Massage.findById(id).populate("senderId receiverId");
    if (!massage) throw new Error("Massage not found");
    return massage;
  } catch (err) {
    throw new Error(err.message);
  }
}

// UPDATE - עדכון מסר
async function updateMassage(id, data) {
  try {
    const updatedMassage = await Massage.findByIdAndUpdate(id, data, { new: true });
    if (!updatedMassage) throw new Error("Massage not found");
    return updatedMassage;
  } catch (err) {
    throw new Error(err.message);
  }
}

// DELETE - מחיקת מסר
async function deleteMassage(id) {
  try {
    const deletedMassage = await Massage.findByIdAndDelete(id);
    if (!deletedMassage) throw new Error("Massage not found");
    return { message: "Massage deleted successfully" };
  } catch (err) {
    throw new Error(err.message);
  }
}


module.exports = {
  createMassage,
    getAllMassages,
    getMassageById,
    updateMassage,
    deleteMassage
};