import { getCustomRepository } from 'typeorm';

import Product from '../models/Product';
import ProductsRepository from '../repositories/ProductsRepository';
import DiaryProductsRepository from '../repositories/DiaryProductsRepository';

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
  public async execute({ id,imagem,nome,descricao,venda,valor,valorKilo } : Request): Promise<Boolean | null > {
    const productsrepository = getCustomRepository(ProductsRepository);
    const diaryproductrepository = getCustomRepository(DiaryProductsRepository);

    const findProduct = await productsrepository.findById( id );
    const findDiaryProduct = await diaryproductrepository.findByName ( nome );

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
        if(findDiaryProduct) {
          await diaryproductrepository.update({ nome: nome}, {
            imagem: imagem,
            nome: nome,
            descricao: descricao,
            venda: venda,
            valor: valor,
            valorKilo: valorKilo,
          })

        }
      return true;
  
    }
    else {
      throw Error('Produto não existe');
    }
  }
}

export default EditProductService;