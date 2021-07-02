import { getCustomRepository } from 'typeorm';

import BannersRepository from '../repositories/BannersRepository';

interface Request {
  nome: string;
}

class DeleteBannerService {
  public async execute({ nome }: Request):  Promise<boolean>{
    const bannersrepository = getCustomRepository(BannersRepository);

    const findBannerbyName = await bannersrepository.findByName( nome );

    if(!findBannerbyName) {
      throw Error('Essa Imagem não existe');
    }



    bannersrepository.delete({
      nome: nome
    })



    return true;
  }
}

export default DeleteBannerService;