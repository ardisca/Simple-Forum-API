import { Auth } from "../models/auth.model";

const AuthRepository = {
  get: async (refreshToken: string) => {
    const data = await Auth.findOne({ refreshToken });
    return data;
  },
  post: async (userId: string, refreshToken: string) => {
    const dataPayload = new Auth({
      userId,
      refreshToken,
    });
    const data = await dataPayload.save();
    return data;
  },
  delete: async (refreshToken: string) => {
    const data = await Auth.findOneAndDelete({ refreshToken });
    return data;
  },
};

export default AuthRepository;
