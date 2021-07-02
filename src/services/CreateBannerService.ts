import { getCustomRepository } from 'typeorm';

import Banner from '../models/Banner';
import BannersRepository from '../repositories/BannersRepository';

interface Request {
  imagem: string;
  nome: string;
}

class CreateProductService {
  public async execute({ imagem, nome } : Request): Promise<Banner | null > {
    const bannersrepository = getCustomRepository(BannersRepository);

    const findBanner = await bannersrepository.findOne( imagem );
    const findBannerbyName = await bannersrepository.findByName( nome );

    if(findBanner) {
      throw Error('Essa Imagem já foi cadastrada!');
    }

    if(findBannerbyName) {
      throw Error('Essa Imagem já foi cadastrada!');
    }



    const banner = bannersrepository.create({
      imagem,
      nome,
    });

    await bannersrepository.save(banner);

    return banner;
  }
}

export default CreateProductService;