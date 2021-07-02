import { EntityRepository, Repository } from 'typeorm';

import Product from '../models/Product';

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {
  
 public async findByName(nome: string): Promise<Product | null> {

    const findProduct = await this.findOne({
      where: {nome},
    });

    return findProduct || null;
    
}

}


export default ProductsRepository;