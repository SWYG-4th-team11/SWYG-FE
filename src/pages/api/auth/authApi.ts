import { useCustomQuery } from '@/hooks/reactQueryHooks/reactQueryHooks';

export interface IUser {
  id: number;
  email: string;
  nickname: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  level: number;
  exp: number;
}

// export const GetLoginUserSSR = (cookie: string) =>
//   Api.get<IUser>('/auth/profile', {
//     headers: {
//       Cookie: cookie,
//     },
//   });

export const GetLoginUser = (id: number) =>
  useCustomQuery<IUser, undefined>(`/user/${id}`, undefined);
