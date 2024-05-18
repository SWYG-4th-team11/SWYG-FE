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
export interface IRoutine {
  id: number;
  title: string;
  memo: string;
  isChecked: boolean;
  routineDate: string;
  userId: number;
  mandalartId: number;
}

export interface IRoutinesResponse {
  routines: IRoutine[];
}

export interface IRoutineInput {
  userId: number;
  mandalartId: number;
  routineDate: Date;
}
export const GetRoutines = (
  userId: number,
  mandalartId: number,
  routineDate: Date
) =>
  useCustomQuery<IRoutine[], IRoutineInput>('/routine/view', {
    userId,
    mandalartId,
    routineDate,
  });

export interface IMandartMain {
  id: number;
  title: string;
  type: 'main' | 'middle' | 'small';
  content: string;
  goalDate: Date;
  parentGoalId: number | null;
  subGoals: IMandartMain[];
  achieved: boolean;
}
export interface IMandart {
  id: number;
  title: string;
  categories: string[];
  userId: number;
  level: number;
  exp: number;
  due: Date;
  levelUp: boolean;
  mainGoal: IMandartMain[];
  subGoals: IMandartMain[];
  dday: number;
}
export const GetMandart = (userId: number) =>
  useCustomQuery<IMandart[], undefined>(
    `/mandalart/userId/${userId}`,
    undefined
  );
