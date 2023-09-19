export class PersonEntity {
  id_pessoa: number;
  nome: string;
  rg: string;
  cpf: string;
  data_nascimento: Date;
  data_admissao: Date;
  funcao?: string;
}
