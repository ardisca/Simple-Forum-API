import { User } from "../models/user.model";

const UserRepository = {
  getDataById: async (id: string) => {
    const data = await User.findById(id);
    return data;
  },
  postData: async (username: string, email: string, password: string) => {
    const data = new User({
      username,
      email,
      password,
    });
    await data.save();
    return data;
  },
  updateData: async (
    id: string,
    payloadData: Partial<{ username: string; email: string; password: string }>
  ) => {
    const data = await User.findByIdAndUpdate(id, payloadData);
    return data;
  },
};

export default UserRepository;
