import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('diaryproducts')
class DiaryProduct {
  @Column()
  imagem: string;

  @PrimaryColumn()
  nome: string;

  @Column()
  descricao: string;

  @Column({ type: "decimal" ,precision: 10, scale: 3 })
  valor: number;

}

export default DiaryProduct;