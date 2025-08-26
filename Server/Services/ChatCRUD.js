const Chat = require("./models/Chat");

// CREATE - יצירת צ'אט חדש
async function createChat(data) {
  try {
    const newChat = new Chat(data);
    const savedChat = await newChat.save();
    return savedChat;
  } catch (err) {
    throw new Error(err.message);
  }
}

// READ - קבלת כל הצ'אטים
async function getAllChats() {
  try {
    const chats = await Chat.find().populate("participant1 participant2 messages");
    return chats;
  } catch (err) {
    throw new Error(err.message);
  }
}

// READ - קבלת צ'אט לפי ID
async function getChatById(id) {
  try {
    const chat = await Chat.findById(id).populate("participant1 participant2 messages");
    if (!chat) throw new Error("Chat not found");
    return chat;
  } catch (err) {
    throw new Error(err.message);
  }
}

// UPDATE - עדכון צ'אט
async function updateChat(id, data) {
  try {
    const updatedChat = await Chat.findByIdAndUpdate(id, data, { new: true });
    if (!updatedChat) throw new Error("Chat not found");
    return updatedChat;
  } catch (err) {
    throw new Error(err.message);
  }
}

// DELETE - מחיקת צ'אט
async function deleteChat(id) {
  try {
    const deletedChat = await Chat.findByIdAndDelete(id);
    if (!deletedChat) throw new Error("Chat not found");
    return { message: "Chat deleted successfully" };
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = {
  createChat,
    getAllChats,
    getChatById,
    updateChat,
    deleteChat
};