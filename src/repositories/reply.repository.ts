import { Reply } from "../models/reply.model";

const ReplyRepository = {
  get: async (threadId: string) => {
    const data = await Reply.find({ threadId })
      .populate("userId")
      .populate("threadId");
    return data;
  },
  getById: async (_id: string) => {
    const data = await Reply.findById(_id)
      .populate("userId")
      .populate("threadId");
    return data;
  },
  post: async (conntent: string, userId: string, threadId: string) => {
    const data = new Reply({
      conntent,
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
