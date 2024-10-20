import { Category } from "../models/category.model";

const CategoryRepository = {
  get: async () => {
    const data = await Category.find();
    return data;
  },
  post: async (name: string) => {
    const data = new Category({ name });
    await data.save();
    return data;
  },
  delete: async (_id: string) => {
    const data = await Category.findOneAndDelete({ _id });
    return data;
  },
};

export default CategoryRepository;
