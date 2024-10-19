import AuthRepository from "../repositories/auth.repository";

const AuthServices = {
  getToken: async (refreshToken: string) => {
    const authData = await AuthRepository.get(refreshToken);
    return authData;
  },
  postToken: async (userId: string, refreshToken: string) => {
    const authData = await AuthRepository.post(userId, refreshToken);
    return authData;
  },
  deleteToken: async (refreshToken: string) => {
    const authData = await AuthRepository.delete(refreshToken);
    return authData;
  },
};

export default AuthServices;
