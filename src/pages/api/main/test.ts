import { useCustomQuery } from '@/hooks/reactQueryHooks/reactQueryHooks';

export interface IQutoe {
  createdAt: string;
  updatedAt: string;
  id: number;
  content: string;
  author: string;
}

export const GetQuote = () =>
  useCustomQuery<IQutoe, undefined>('/quote', undefined);
