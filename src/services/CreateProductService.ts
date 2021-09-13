import { getCustomRepository } from 'typeorm';

import Product from '../models/Product';
import ProductsRepository from '../repositories/ProductsRepository';

interface Request {
  imagem: string | undefined;
  nome: string;
  descricao: string;
  venda: string;
  valor: number;
  valorKilo: number;
}

class CreateProductService {
  public async execute({ imagem,nome,descricao,venda,valor,valorKilo } : Request): Promise<Product | null > {
    const productsrepository = getCustomRepository(ProductsRepository);

    const findProduct = await productsrepository.findByName( nome );

    if(findProduct) {
      throw Error('Esse produto já foi cadastrado');
    }



    const product = productsrepository.create({
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