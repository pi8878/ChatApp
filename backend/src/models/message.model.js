import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        text: {
            type: String,
        },
        image: {
            type: String,
        },
    },
    {timestamps: true}
);

const Message = mongoose.model("Message", messageSchema);

// Export the Message model
// This allows us to use the Message model in other files

export default Message;