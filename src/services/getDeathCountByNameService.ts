import apiClient from 'config/axiosClient.config';

type GetDeathCountByName = {
  name: string;
  deathCount: number;
};

type GetDeathCountByNameResponse = GetDeathCountByName;

const getDeathCountByNameService = async (name: string): Promise<GetDeathCountByNameResponse> => {
  const nameParam = name.replace(' ', '+');
  return await apiClient().get<GetDeathCountByNameResponse>(`/death-count?name=${nameParam}`);
};

export default getDeathCountByNameService;
