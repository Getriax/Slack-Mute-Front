import { request, authenticatedRequest } from './axios.impl';
import { authorize } from './auth';
import { Token } from 'app/models';
import { getMuted, setMuted } from './muted';
import { Muted } from 'app/models/muted';
import { History, HistoryDelete } from 'app/models/history';
import { getHistory, deleteHistory } from './history';

export const authorizeUser = async (
  code: string,
): Promise<Token> => request('/slack/oauth', 'get', authorize)(code);

export const getSlackMuted = async (
): Promise<Muted> => authenticatedRequest('/slack/muted', 'get', getMuted)();

export const setSlackMuted = async (
  channelIds: string[],
): Promise<History> => authenticatedRequest('slack/muted', 'post', setMuted)(channelIds);

export const getMutedHistory = async (
): Promise<History> => authenticatedRequest('/slack/history', 'get', getHistory)();

export const deleteHistoryIndex = async (
  index: number,
): Promise<HistoryDelete> => authenticatedRequest('/slack/history', 'delete', deleteHistory)(index);
