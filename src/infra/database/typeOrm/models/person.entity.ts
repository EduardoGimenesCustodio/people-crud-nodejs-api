import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pessoas')
export class PersonModel {
  @PrimaryGeneratedColumn()
  id_pessoa: number;

  @Column()
  nome: string;

  @Column()
  rg: string;

  @Column()
  cpf: string;

  @Column()
  data_nascimento: Date;

  @Column()
  data_admissao: Date;

  @Column()
  funcao?: string;
}
