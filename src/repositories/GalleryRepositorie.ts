import { EntityRepository, Repository } from 'typeorm';

import Gallery from '../models/Gallery';

@EntityRepository(Gallery)
class GallerysRepository extends Repository<Gallery> {
  
 public async findByName(nome: string): Promise<Gallery | null> {

    const findGallery = await this.findOne({
      where: {nome},

    });

    return findGallery || null;
    
}

}


export default GallerysRepository;