import { Schema, model } from "mongoose";

const replySchema = new Schema({
  content: String,
  threadId: { type: Schema.Types.ObjectId, ref: "Thread" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

export const Reply = model("Reply", replySchema);
