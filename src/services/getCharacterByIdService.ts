import { CharacterFromApi } from './getCharactersService';
import apiClient from 'config/axiosClient.config';

const getCharacterByIdService = async (id: string): Promise<CharacterFromApi | null> => {
  try {
    const characterInfo = await apiClient().get<CharacterFromApi[]>(`/characters/${id}`);
    return characterInfo[0];
  } catch (err) {
    return null;
  }
};

export default getCharacterByIdService;
