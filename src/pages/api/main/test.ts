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

interface IGoal {
  id: number;
  title: string;
  type: string;
  content: string;
  goalDate: string;
  parentGoalId: number | null;
  subGoals: IGoal[];
  achieved: boolean;
}
export interface ICharacter {
  id: number;
  title: string;
  categories: string[];
  userId: number;
  level: number;
  exp: number;
  due: string;
  levelUp: boolean;
  mainGoal: IGoal;
  subGoals: IGoal[];
  dday: number;
}

export const GetCharacter = (userId: number) =>
  useCustomQuery<ICharacter[], undefined>(
    `/mandalart/userId/${userId}`,
    undefined
  );
