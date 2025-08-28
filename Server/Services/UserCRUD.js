// const User = require('../Types/User');
const User = require('../Types/User.js');

async function createUser(data) {
    try {
        const newUser = new User(data);
        const savedUser = await newUser.save();
        return savedUser;
    } catch (err) {
        throw new Error(err.message);
    }
}


async function getAllUsers() {
    try {
        const users = await User.find().populate("friends groups");
        return users;
    } catch (err) {
        throw new Error(err.message);
    }
}


async function getUserById(id) {
    try {
        const user = await User.findById(id).populate("friends groups");
        if (!user) throw new Error("User not found");
        return user;
    } catch (err) {
        throw new Error(err.message);
    }
}


async function updateUser(id, data) {
    try {
        const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
        if (!updatedUser) throw new Error("User not found");
        return updatedUser;
    } catch (err) {
        throw new Error(err.message);
    }
}


async function deleteUser(id) {
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) throw new Error("User not found");
        return { message: "User deleted successfully" };
    } catch (err) {
        throw new Error(err.message);
    }
}


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};