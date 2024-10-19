import { Schema, model } from "mongoose";

const threadSchema = new Schema({
  title: String,
  content: String,
  categoryId: { type: Schema.Types.ObjectId, ref: "category" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

export const Thread = model("Thread", threadSchema);
