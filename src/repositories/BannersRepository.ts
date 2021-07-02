import { EntityRepository, Repository } from 'typeorm';

import Banner from '../models/Banner';

@EntityRepository(Banner)
class BannersRepository extends Repository<Banner> {
  
 public async findByName(nome: string): Promise<Banner | null> {

    const findBanner = await this.findOne({
      where: {nome},

    });

    return findBanner || null;
    
}

}


export default BannersRepository;