import { response, Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateGalleryService from '../services/CreateGalleryService';
import GalleryRepositorie from '../repositories/GalleryRepositorie';
import DeleteGalleryService from '../services/DeleteGalleryService';

const GalleryRouter = Router();

GalleryRouter.get('/', async (request, response) => {
  const GalleryRepository = getCustomRepository(GalleryRepositorie);
  const gallery = await GalleryRepository.find();

  return response.json( gallery );
})

GalleryRouter.post('/', async (request,response) => {
  try {
    const {url,nome} = request.body;

    const createGallery = new CreateGalleryService();

    const gallery = await createGallery.execute({
      nome: nome,
      url: url,
    });

    return response.json(gallery);

  } catch (error) {
    
    return response.status(400).json({error: error.message});
    
  }
})

GalleryRouter.delete('/', async (request,response) => {
  try {
    const { nome } = request.body;

    const deleteGallery = new DeleteGalleryService();

    const isdeleted = await deleteGallery.execute({
      nome: nome
    });

    return response.json({sucess: "Imagem Deletada com Sucesso"})
    
  } catch (err) {
    return response.status(400).json({error: err.message});
  }
})

export default GalleryRouter;