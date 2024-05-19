import { UseQueryOptions } from '@tanstack/react-query';
import { useCustomQuery } from '@/hooks/reactQueryHooks/reactQueryHooks';

export interface IUserParama {
  id: number;
}

export interface IUser {
  id: number;
  email: string;
  nickname: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  level: number;
  exp: number;
  mandalartExists: boolean;
  mandalartId: number | null;
}

// export const GetLoginUserSSR = (cookie: string) =>
//   Api.get<IUser>('/auth/profile', {
//     headers: {
//       Cookie: cookie,
//     },
//   });

// export const GetLoginUser = (id: number) =>
//   useCustomQuery<IUser, undefined>(`/user/${id}`, undefined);

export const GetUser = () => useCustomQuery('/user', undefined);

export const GetLoginUser = (
  params: IUserParama,
  option?: UseQueryOptions<IUser>
) =>
  useCustomQuery<IUser, IUserParama | undefined>(
    `/user/${params.id}`,
    undefined,
    option
  );
