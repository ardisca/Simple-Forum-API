import { Reply } from "../models/reply.model";

const ReplyRepository = {
  get: async (threadId: string) => {
    const data = await Reply.find({ threadId })
      .populate({ path: "userId", select: "username" })
      .populate({
        path: "threadId",
        select: "title content categoryId",
        populate: {
          path: "categoryId",
          select: "name",
        },
      });
    return data;
  },
  getById: async (_id: string) => {
    const data = await Reply.findById(_id)
      .populate({ path: "userId", select: "username" })
      .populate({ path: "threadId", select: "title content categoryId" });
    return data;
  },
  post: async (content: string, userId: string, threadId: string) => {
    const data = new Reply({
      content,
      userId,
      threadId,
    });
    await data.save();
    return data;
  },
  petch: async (_id: string, content: string) => {
    const data = await Reply.findByIdAndUpdate(_id, { content });
    return data;
  },
  delete: async (_id: string) => {
    const data = await Reply.findByIdAndDelete(_id);
    return data;
  },
};

export default ReplyRepository;
