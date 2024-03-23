import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import mongoose from "mongoose";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id; //coming from protectroute middleware

    // Convert receiverId to ObjectId
    const receiverObjectId = new mongoose.Types.ObjectId(receiverId);

    // Find or create conversation
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverObjectId] }, //conversation between these 2 users
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverObjectId], //conversation between these 2 users
      });
    }

    // Create new message
    const newMessage = new Message({
      senderId,
      receiverId: receiverObjectId,
      message,
    });

    // Save new message

    // Push message to conversation
    conversation.messages.push(newMessage._id);

    await Promise.all([conversation.save(), newMessage.save()]); //run in parallel
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export const getMessage = async (req, res) => {
    try {
        console.log("Hello");
        const senderId = req.user._id
        console.log(senderId);
        const {id: conversationId} = req.params;
        console.log(conversationId);
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, conversationId] }, //conversation between these 2 users
          }).populate("messages")//give messages one by one

          if(!conversation)
          {
            return res.status(200).json([]);
          }
          const messages = conversation.messages;
          res.status(200).json(messages)
          console.log("Hello");
          res.status(201).json(conversation.messages)
    } catch (error) {
        res.status(501).json(error)
    }
};
