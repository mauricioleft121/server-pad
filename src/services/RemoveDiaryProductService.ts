import { getCustomRepository, IsNull } from 'typeorm';

import DiaryProductsRepository from '../repositories/DiaryProductsRepository';


class RemoveDiaryProductService {
  public async execute(){
    const DiaryProducts = getCustomRepository(DiaryProductsRepository);

   await DiaryProducts.clear();

  }
}

export default RemoveDiaryProductService;