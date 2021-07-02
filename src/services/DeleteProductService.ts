import { getCustomRepository } from 'typeorm';

import Product from '../models/Product';
import ProductsRepository from '../repositories/ProductsRepository';

interface Request {
  nome: string;
}

class DeleteProductService {
  public async execute({nome} : Request): Promise<Product | null > {
    const productsrepository = getCustomRepository(ProductsRepository);

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

export default DeleteProductService;