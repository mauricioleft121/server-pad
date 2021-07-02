import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('banner')
class Banner {

  @PrimaryColumn()
  imagem: string;

  @Column()
  nome: string;

}

export default Banner;