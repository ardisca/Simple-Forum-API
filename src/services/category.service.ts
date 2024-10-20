import CategoryRepository from "../repositories/category.repository";

const CategoryServices = {
  postData: async (name: string) => {
    const data = await CategoryRepository.post(name);
    return data;
  },
  getData: async () => {
    const data = await CategoryRepository.get();
    return data;
  },
  deleteData: async (id: string) => {
    const data = await CategoryRepository.delete(id);
    return data;
  },
};

export default CategoryServices;
