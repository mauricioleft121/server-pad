import { getCustomRepository, IsNull } from 'typeorm';

import Product from '../models/DiaryProduct';
import DiaryProductsRepository from '../repositories/DiaryProductsRepository';

interface Request {
  nome: string;
}

class RemoveDiaryProductService {
  public async execute({nome} : Request): Promise<Product | null > {
    const productsrepository = getCustomRepository(DiaryProductsRepository);

    const findProduct = await productsrepository.findByName( nome );

    if(!findProduct) {
      throw Error('Esse produto não existe');
    }



    await productsrepository.delete({
      nome: nome
    })

    return null;
  }
}

export default RemoveDiaryProductService;