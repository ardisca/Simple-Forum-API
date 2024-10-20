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
  postData: async (conntent: string, userId: string, threadId: string) => {
    const data = await ReplyRepository.post(conntent, userId, threadId);
    return data;
  },
  petchData: async (id: string, conntent: string) => {
    const data = await ReplyRepository.petch(id, conntent);
    return data;
  },
  deleteData: async (id: string) => {
    const data = await ReplyRepository.delete(id);
    return data;
  },
};

export default ReplyServices;
