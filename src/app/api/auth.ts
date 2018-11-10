import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Token } from 'app/models';

export const authorize = async (
  axios: AxiosInstance, url: string, method: string, code: string,
  ): Promise<Token> => {
  const params = { code };

  const config: AxiosRequestConfig = {
    url, method, params,
  };

  const { data }: { data: Token } = await axios(config);
  console.log({ data });
  return data;
};
