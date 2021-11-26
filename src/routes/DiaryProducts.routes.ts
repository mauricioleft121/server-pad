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
    const { imagem, nome, descricao, venda, valor, valorKilo } = request.body;

    const createProduct = new AddDiaryProductService();

       await createProduct.execute({
        imagem: imagem,
        nome: nome,
        descricao: descricao,
        venda: venda,
        valor: valor,
        valorKilo: valorKilo,
      });

    const productsRepository = getCustomRepository(DiaryProductsRepository);
    const products = await productsRepository.find();

    return response.json(products);

  } catch (error: any) {
    
    return response.status(400).json({error: error.message});
    
  }
})

DiaryProductsRouter.delete('/', async (request,response) => {
  try {

    const { nome } = request.body;

    const deleteProduc = new RemoveDiaryProductService();

   await deleteProduc.execute(
     {
       nome: nome,
     }
   );

    return response.json({sucess: "Produto deletado com sucesso!"})
    
  } catch (err: any) {
    return response.status(400).json({error: err.message});
  }
})

export default DiaryProductsRouter;