import { PersonEntity } from '../entities/person.entity';

export class CreatePersonDto implements Omit<PersonEntity, 'id_pessoa'> {
  nome: string;
  rg: string;
  cpf: string;
  data_nascimento: Date;
  data_admissao: Date;
  funcao?: string;
}
