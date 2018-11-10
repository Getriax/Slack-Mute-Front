import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { History, HistoryDelete } from 'app/models/history';

export const getHistory = async (
  axios: AxiosInstance, url: string, method: string,
): Promise<History> => {
  const config: AxiosRequestConfig = {
    url, method,
  };

  const { data }: { data: History } = await axios(config);
  console.log({ data });
  return { ...data };
};

export const deleteHistory = async (
  axios: AxiosInstance, url: string, method: string, index: number,
): Promise<HistoryDelete> => {
  const config: AxiosRequestConfig = {
    url, method, data: { delete_index: index },
  };

  const { data }: { data: HistoryDelete } = await axios(config);
  console.log({ data });
  return data;
};
