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
  venda: string;

  @Column()
  valor: number;

  @Column()
  valorKilo: number;

}

export default Product;