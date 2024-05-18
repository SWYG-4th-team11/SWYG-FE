import { atom } from 'recoil';

interface IAuthStoreType {
  id: number | null;
  isLogin: boolean;
  email: string;
  nickname: string;
  createdAt: string;
  updatedAt: string | null;
  level: number | null;
  exp: number | null;
}

const AuthStore = atom<IAuthStoreType>({
  key: 'AuthStore',
  default: {
    id: null,
    isLogin: false,
    email: '',
    nickname: '',
    createdAt: '',
    updatedAt: '',
    level: null,
    exp: null,
  },
});

export default AuthStore;
