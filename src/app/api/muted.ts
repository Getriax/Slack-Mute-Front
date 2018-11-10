import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Muted } from 'app/models/muted';
import { History } from 'app/models/history';

export const getMuted = async (
  axios: AxiosInstance, url: string, method: string,
): Promise<Muted> => {
  const config: AxiosRequestConfig = {
    url, method,
  };

  const { data }: { data: Muted } = await axios(config);
  console.log({ data });
  return data;
};

export const setMuted = async (
  axios: AxiosInstance, url: string, method: string, channelIds: string[],
): Promise<History> => {
  const config: AxiosRequestConfig = {
    url, method, data: { muted_channels: channelIds },
  };

  const { data }: { data: History } = await axios(config);
  console.log({ data });
  return data;
};
