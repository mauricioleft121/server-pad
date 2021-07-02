import { EntityRepository, Repository } from 'typeorm';

import DiaryProduct from '../models/DiaryProduct';

@EntityRepository(DiaryProduct)
class DiaryProducts extends Repository<DiaryProduct> {
  
 public async findByName(nome: string): Promise<DiaryProduct | null> {

    const findProduct = await this.findOne({
      where: {nome},
    });

    return findProduct || null;
    
}

}


export default DiaryProducts;