import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import AddDiaryProductService from '../services/AddDiaryProductService';
import DiaryProductsRepository from '../repositories/DiaryProductsRepository';
import RemoveDiaryProductService from '../services/RemoveDiaryProductService';

const DiaryProductsRouter = Router();

DiaryProductsRouter.get('/', async (request, response) => {
  const productsRepository = getCustomRepository(DiaryProductsRepository);
  const products = await productsRepository.find();

  return response.json( products );
})

DiaryProductsRouter.post('/', async (request,response) => {
  try {
    const {itens} = request.body;

    const createProduct = new AddDiaryProductService();

    for (let index = 0; index < itens.length; index++) {
       await createProduct.execute({
        imagem: itens[index].imagem,
        nome:itens[index].nome,
        descricao: itens[index].descricao,
        venda: itens[index].venda,
        valor: itens[index].valor,
        valorKilo: itens[index].valorKilo,
      });
    }
    const productsRepository = getCustomRepository(DiaryProductsRepository);
    const products = await productsRepository.find();

    return response.json(products);

  } catch (error: any) {
    
    return response.status(400).json({error: error.message});
    
  }
})

DiaryProductsRouter.delete('/', async (request,response) => {
  try {
    const deleteProduc = new RemoveDiaryProductService();

   await deleteProduc.execute();

    return response.json({sucess: "Tabela Limpa com Sucesso!"})
    
  } catch (err: any) {
    return response.status(400).json({error: err.message});
  }
})

export default DiaryProductsRouter;