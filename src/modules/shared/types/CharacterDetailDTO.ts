import { CharacterFromApi } from 'services/getCharactersService';

export type CharacterDetailDTO = CharacterFromApi & {
  quote: string | null;
  deads: number | null;
};
