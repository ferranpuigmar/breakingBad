import apiClient from 'config/axiosClient.config';

export type CharacterFromApi = {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: string;
  appearance: number[];
  nickname: string;
  portrayed: string;
  better_call_saul_appearance: any[];
};

export type CharactersResponse = CharacterFromApi[];

type GetCharactersServiceParams = {
  limit?: number;
};

const getCharactersService = async ({
  limit
}: GetCharactersServiceParams): Promise<CharactersResponse> => {
  let apiUrl = `/characters`;
  if (limit) {
    apiUrl = `${apiUrl}?limit=${limit}&offset=${limit}`;
  }
  return await apiClient().get<CharactersResponse>(apiUrl);
};

export default getCharactersService;
