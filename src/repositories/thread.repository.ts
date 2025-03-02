import { Thread } from "../models/thread.mode";

const ThreadRepository = {
  get: async () => {
    const data = await Thread.find()
      .populate({ path: "categoryId", select: "name" })
      .populate({ path: "userId", select: "username email" });
    return data;
  },
  getById: async (_id: string) => {
    const data = await Thread.findById(_id)
      .populate("categoryId")
      .populate("userId");
    return data;
  },
  post: async (
    title: string,
    content: string,
    categoryId: string,
    userId: string
  ) => {
    const data = new Thread({
      title,
      content,
      categoryId,
      userId,
    });
    await data.save();
    return data;
  },
  patch: async (
    id: string,
    payloadData: Partial<{
      title: string;
      content: string;
      categoryId: string;
    }>
  ) => {
    const data = await Thread.findByIdAndUpdate(id, payloadData);
    return data;
  },
  delete: async (_id: string) => {
    const data = await Thread.findByIdAndDelete({ _id });
    return data;
  },
};

export default ThreadRepository;
