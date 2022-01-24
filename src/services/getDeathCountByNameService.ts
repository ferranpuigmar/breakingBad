import { getConcatName } from './../modules/shared/utils/getConcatName';
import apiClient from 'config/axiosClient.config';

type GetDeathCountByName = {
  name: string;
  deathCount: number;
};

type GetDeathCountByNameResponse = GetDeathCountByName;

const getDeathCountByNameService = async (
  name: string | undefined
): Promise<GetDeathCountByNameResponse | null> => {
  if (!name) return null;
  const nameParam = getConcatName(name);
  try {
    const deaths = await apiClient().get<GetDeathCountByNameResponse[]>(
      `/death-count?name=${nameParam}`
    );
    return deaths[0];
  } catch (err) {
    return null;
  }
};

export default getDeathCountByNameService;
