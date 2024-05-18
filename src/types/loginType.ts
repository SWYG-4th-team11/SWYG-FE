export interface ILoginDataTypes {
  isLogin?: boolean;
  id: number;
  email: string;
  nickname: string;
  token: string;
  createdDateTime: string;
}

export interface ILoginResultType {
  detail: ILoginDataTypes;
  message: string;
  result: string;
}
