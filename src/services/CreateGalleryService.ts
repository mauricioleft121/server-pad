import { getCustomRepository } from 'typeorm';

import Gallery from '../models/Gallery';
import GalleryRepository from '../repositories/GalleryRepositorie';

interface Request {
  url: string;
  nome: string;
}

class CreateGalleryService {
  public async execute({ url, nome } : Request): Promise<Gallery | null > {
    const galleryrepository = getCustomRepository(GalleryRepository);

    const findBanner = await galleryrepository.findOne( url );
    const findBannerbyName = await galleryrepository.findByName( nome );

    if(findBanner) {
      throw Error('Essa Imagem já foi cadastrada!');
    }

    if(findBannerbyName) {
      throw Error('Essa Imagem já foi cadastrada!');
    }



    const banner = galleryrepository.create({
      nome,
      url,
    });

    await galleryrepository.save(banner);

    return banner;
  }
}

export default CreateGalleryService;