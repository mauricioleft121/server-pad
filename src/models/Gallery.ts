import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('gallery')
class Gallery {

  @PrimaryColumn()
  nome: string;

  @Column()
  url: string;

}

export default Gallery;