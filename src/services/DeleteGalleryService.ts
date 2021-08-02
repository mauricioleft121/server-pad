import { getCustomRepository } from 'typeorm';

import GalleryRepository from '../repositories/GalleryRepositorie';

interface Request {
  nome: string;
}

class DeleteGalleryService {
  public async execute({ nome }: Request):  Promise<boolean>{
    const galleryrepository = getCustomRepository(GalleryRepository);

    const findBannerbyName = await galleryrepository.findByName( nome );

    if(!findBannerbyName) {
      throw Error('Essa Imagem não existe');
    }



    galleryrepository.delete({
      nome: nome
    })



    return true;
  }
}

export default DeleteGalleryService;