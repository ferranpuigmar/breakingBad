import { getConcatName } from '../modules/shared/utils/getConcatName';
import apiClient from 'config/axiosClient.config';

type GetRandomQuoteByAuthorResponse = {
  quoteId: number;
  quote: string;
  author: string;
};

const getRandomQuoteByAuthorService = async (
  name: string | undefined
): Promise<GetRandomQuoteByAuthorResponse | null> => {
  if (!name) return null;
  const nameParam = getConcatName(name);
  try {
    const quote = await apiClient().get<GetRandomQuoteByAuthorResponse[]>(
      `/quote/random?author=${nameParam}`
    );
    return quote[0];
  } catch (err) {
    return null;
  }
};

export default getRandomQuoteByAuthorService;
