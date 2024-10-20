import UserRepository from "../repositories/user.repository";

const UserServices = {
  postData: async (username: string, email: string, password: string) => {
    const data = await UserRepository.postData(username, email, password);
    return data;
  },
  getDataById: async (id: string) => {
    const data = await UserRepository.getDataById(id);
    return data;
  },
  updateData: async (
    id: string,
    payloadData: Partial<{ username: string; email: string; password: string }>
  ) => {
    const data = await UserRepository.updateData(id, payloadData);
    return data;
  },
};

export default UserServices;
