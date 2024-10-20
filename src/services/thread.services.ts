import ThreadRepository from "../repositories/thread.repository";

const ThreadServices = {
  getAllData: async () => {
    const data = ThreadRepository.get();
    return data;
  },
  getDataById: async (id: string) => {
    const data = ThreadRepository.getById(id);
    return data;
  },
  postData: async (
    title: string,
    content: string,
    categoryId: string,
    userId: string
  ) => {
    const data = ThreadRepository.post(title, content, categoryId, userId);
    return data;
  },
  patchData: async (
    id: string,
    payloadData: Partial<{
      title: string;
      content: string;
      categoryId: string;
    }>
  ) => {
    const data = ThreadRepository.patch(id, payloadData);
    return data;
  },
  delete: async (id: string) => {
    const data = ThreadRepository.delete(id);
    return data;
  },
};

export default ThreadServices;
