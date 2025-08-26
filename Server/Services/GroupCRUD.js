const Group = require('../Types/Group');

async function createGroup(data) {
  try {
    const newGroup = new Group(data);
    const savedGroup = await newGroup.save();
    return savedGroup;
  } catch (err) {
    throw new Error(err.message);
  }
}

// READ - קבלת כל הקבוצות
async function getAllGroups() {
  try {
    const groups = await Group.find().populate("members admin");
    return groups;
  } catch (err) {
    throw new Error(err.message);
  }
}

// READ - קבלת קבוצה לפי ID
async function getGroupById(id) {
  try {
    const group = await Group.findById(id).populate("members admin");
    if (!group) throw new Error("Group not found");
    return group;
  } catch (err) {
    throw new Error(err.message);
  }
}

// UPDATE - עדכון קבוצה
async function updateGroup(id, data) {
  try {
    const updatedGroup = await Group.findByIdAndUpdate(id, data, { new: true });
    if (!updatedGroup) throw new Error("Group not found");
    return updatedGroup;
  } catch (err) {
    throw new Error(err.message);
  }
}

// DELETE - מחיקת קבוצה
async function deleteGroup(id) {
  try {
    const deletedGroup = await Group.findByIdAndDelete(id);
    if (!deletedGroup) throw new Error("Group not found");
    return { message: "Group deleted successfully" };
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = {
  createGroup,
    getAllGroups,
    getGroupById,
    updateGroup,
    deleteGroup
};
