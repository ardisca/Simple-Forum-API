import ReplyRepository from "../repositories/reply.repository";

const ReplyServices = {
  getData: async (idThread: string) => {
    const data = await ReplyRepository.get(idThread);
    return data;
  },
  getDataById: async (id: string) => {
    const data = await ReplyRepository.getById(id);
    return data;
  },
  postData: async (content: string, userId: string, threadId: string) => {
    const data = await ReplyRepository.post(content, threadId, userId);
    return data;
  },
  petchData: async (id: string, content: string) => {
    const data = await ReplyRepository.petch(id, content);
    return data;
  },
  deleteData: async (id: string) => {
    const data = await ReplyRepository.delete(id);
    return data;
  },
};

export default ReplyServices;
