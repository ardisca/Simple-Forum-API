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
  updateData: async (id: string, username: string, email: string) => {
    const data = await UserRepository.updateData(id, username, email);
    return data;
  },
  updateDataPassword: async (id: string, newPassword: string) => {
    const data = await UserRepository.updateData(id, newPassword);
    return data;
  },
};

export default UserServices;
