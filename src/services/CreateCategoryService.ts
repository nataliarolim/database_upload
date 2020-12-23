import { getRepository } from 'typeorm';
import Category from '../models/Category';

class CreateCategoryService {
  public async execute(title: string): Promise<Category> {
    const categoryRepository = getRepository(Category);

    const checkTitleExists = await categoryRepository.findOne({
      where: { title },
    });

    const category = categoryRepository.create({
      id: checkTitleExists && checkTitleExists.id,
      title,
    });
    await categoryRepository.save(category);

    return category;
  }
}

export default CreateCategoryService;
