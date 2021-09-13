import { response, Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateBannerService from '../services/CreateBannerService';
import BannersRepository from '../repositories/BannersRepository';
import DeleteBannerService from '../services/DeleteBannerService';

const BannerRouter = Router();

BannerRouter.get('/', async (request, response) => {
  const BannerRepository = getCustomRepository(BannersRepository);
  const banners = await BannerRepository.find();

  return response.json( banners );
})

BannerRouter.post('/', async (request,response) => {
  try {
    const {imagem,nome} = request.body;

    const createBanner = new CreateBannerService();

    const banner = await createBanner.execute({
      imagem: imagem,
      nome: nome,
    });

    return response.json(banner);

  } catch (error) {
    
    return response.status(400).json({error: error.message});
    
  }
})

BannerRouter.delete('/', async (request,response) => {
  try {
    const { nome } = request.body;

    const deleteBanner = new DeleteBannerService();

    const isdeleted = await deleteBanner.execute({
      nome: nome
    });

    return response.json({sucess: "Imagem Deletada com Sucesso"})
    
  } catch (err) {
    return response.status(400).json({error: err.message});
  }
})

export default BannerRouter;