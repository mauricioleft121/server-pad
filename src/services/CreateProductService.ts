import { getCustomRepository } from 'typeorm';

import Product from '../models/Product';
import ProductsRepository from '../repositories/ProductsRepository';

interface Request {
  id: string;
  imagem: string | undefined;
  nome: string;
  descricao: string;
  venda: string;
  valor: number;
  valorKilo: number;
}

class CreateProductService {
  public async execute({ id,imagem,nome,descricao,venda,valor,valorKilo } : Request): Promise<Product | null > {
    const productsrepository = getCustomRepository(ProductsRepository);

    const findProduct = await productsrepository.findByName( nome );

    if(findProduct) {
      throw Error('Esse produto já foi cadastrado');
    }



    const product = productsrepository.create({
      id,
      imagem,
      nome,
      descricao,
      venda,
      valor,
      valorKilo,
    });

    await productsrepository.save(product);

    return product;
  }
}

export default CreateProductService;