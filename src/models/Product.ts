import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('products')
class Product {
  @Column()
  imagem: string;

  @PrimaryColumn()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  valor: number;

}

export default Product;