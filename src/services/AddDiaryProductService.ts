import { getCustomRepository } from 'typeorm';

import DiaryProduct from '../models/DiaryProduct'
import DiaryProductsRepository from '../repositories/DiaryProductsRepository';

interface Request {
  imagem: string;
  nome: string;
  descricao: string;
  valor: number;
}

class AddDiaryProductService {
  public async execute({ imagem,nome,descricao,valor } : Request): Promise<DiaryProduct | null > {
    const productsrepository = getCustomRepository(DiaryProductsRepository);

    const findProduct = await productsrepository.findByName( nome );

    if(findProduct) {
      throw Error('Esse produto já foi cadastrado');
    }



    const product = productsrepository.create({
      imagem,
      nome,
      descricao,
      valor
    });

    await productsrepository.save(product);

    return product;
  }
}

export default AddDiaryProductService;