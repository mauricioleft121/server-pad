import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateProductService from '../services/CreateProductService';
import ProductsRepository from '../repositories/ProductsRepository';
import EditProductService from '../services/EditProductService';
import DeleteProductService from '../services/DeleteProductService';

const ProductsRouter = Router();

ProductsRouter.get('/', async (request, response) => {
  const productsRepository = getCustomRepository(ProductsRepository);
  const products = await productsRepository.find();

  return response.json( products );
})

ProductsRouter.post('/', async (request,response) => {
  try {
    const {imagem, nome, descricao,venda, valor,valorKilo} = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      imagem: imagem,
      nome: nome,
      descricao: descricao,
      venda: venda,
      valor: valor,
      valorKilo: valorKilo,
    });

    return response.json(product);

  } catch (error: any) {
    
    return response.status(400).json({error: error.message});
    
  }
})

ProductsRouter.delete('/', async (request,response) => {
  try {
    const { nome } = request.body;

    const deleteProduc = new DeleteProductService();

   await deleteProduc.execute({
     nome: nome,
   })

    return response.json({sucess: "Produto deletado com sucesso!"})
    
  } catch (err: any) {
    return response.status(400).json({error: err.message});
  }
})

ProductsRouter.patch('/', async (request,response) => {
  try {
    const {id,imagem, nome, descricao,venda, valor,valorKilo} = request.body;

    const editProd = new EditProductService();

    const product = await editProd.execute({
      id: id,
      imagem: imagem,
      nome: nome,
      descricao: descricao,
      venda: venda,
      valor: valor,
      valorKilo: valorKilo,
    });

    return response.json(product);
  }
  catch(err: any) {
    console.log(err.message);
    return response.status(400).json({error: err.message});
  }
})

export default ProductsRouter;