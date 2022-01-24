import getError, { ErrorResponse, HttpStatus } from './../modules/shared/utils/getError';
import { CharacterFromApi } from './getCharactersService';
import apiClient from 'config/axiosClient.config';

const getCharacterByIdService = async (id: string): Promise<CharacterFromApi | ErrorResponse> => {
  try {
    const characterInfo = await apiClient().get<CharacterFromApi[]>(`/characters/${id}`);
    if (!characterInfo[0]) {
      return getError(HttpStatus.NOT_FOUND, 'character_not_found');
    }
    return characterInfo[0];
  } catch (err) {
    return getError(HttpStatus.INTERNAL_SERVER, 'internal_server_error');
  }
};

export default getCharacterByIdService;
