import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('diaryproducts')
class DiaryProduct {
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

export default DiaryProduct;