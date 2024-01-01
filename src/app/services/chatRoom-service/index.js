const chatRoomSchema = require("../../models/chatRoom-model");
const userSchema = require("../../models/user-model");

module.exports = {
  getHistoryMessage: async ({ roomId }) =>
    new Promise(async (resolve, reject) => {
      try {
        const chatRoom = await chatRoomSchema.findById(roomId);
        console.log(roomId);
        if (!chatRoom) {
          resolve({
            status: 404,
            message: "Not Found Room",
          });
        } else {
          resolve({
            status: 200,
            data: chatRoom.messages,
          });
        }
      } catch (error) {
        reject(error);
      }
    }),

  /**
   * Logic code API - Get Room information
   */
  getRooms: async () =>
    new Promise(async (resolve, reject) => {
      try {
        const chatRooms = await chatRoomSchema.find();
        resolve({
          status: 200,
          message: "Get Rooms Success",
          data: chatRooms,
        });
      } catch (error) {
        reject(error);
      }
    }),

  /**
   * Logic code API - Save message to database
   */
  saveMessage: async ({ roomId, userId, timestamp, message }) => {
    try {
      const chatRoom = await chatRoomSchema.findById(roomId);
      if (!chatRoom) {
        return { status: 404, message: "Chat Room not found" };
      }

      const user = await userSchema.findById(userId);
      if (!user) {
        return { status: 404, message: "User not found" };
      }

      const new_message = { user, timestamp, message };
      chatRoom.messages.push(new_message);
      await chatRoom.save();

      return { status: 200, message: "Save Message Success" };
    } catch (error) {
      // Log error and return a generic error message
      console.error(error);
      return {
        status: 500,
        message: "An error occurred while saving the message",
      };
    }
  },
};
