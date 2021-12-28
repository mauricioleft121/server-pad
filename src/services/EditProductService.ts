import { getCustomRepository } from 'typeorm';

import Product from '../models/Product';
import ProductsRepository from '../repositories/ProductsRepository';

interface Request {
  imagem: string | undefined;
  id: string;
  nome: string;
  descricao: string;
  venda: string;
  valor: number;
  valorKilo: number;
}

class EditProductService {
  public async execute({ id,imagem,nome,descricao,venda,valor,valorKilo } : Request): Promise<Product | null > {
    const productsrepository = getCustomRepository(ProductsRepository);

    const findProduct = await productsrepository.findById( id );

    if(findProduct) {
      await productsrepository.update({ id: id },
        {
          imagem: imagem,
          nome: nome,
          descricao: descricao,
          venda: venda,
          valor: valor,
          valorKilo: valorKilo,
        });

      const productupdate = await productsrepository.findByName( nome );
      return productupdate;
  
    }
    else {
      throw Error('Produto não existe');
    }
  }
}

export default EditProductService;