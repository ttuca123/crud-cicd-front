import { Endereco } from "./endereco";

export interface Contato {
  id?: number;
  name?: string;
  last_name?: string;
  cpf?: string;
  email?: string;
  enderecos?: Endereco[]
}
