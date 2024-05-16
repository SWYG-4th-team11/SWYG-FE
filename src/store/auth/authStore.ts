import { atom } from 'recoil';

interface IAuthStoreType {
  id: number | null;
  isLogin: boolean;
  email: string;
  nickname: string;
  createdDateTime: string;
}

const AuthStore = atom<IAuthStoreType>({
  key: 'AuthStore',
  default: {
    id: null,
    isLogin: false,
    email: '',
    nickname: '',
    createdDateTime: '',
  },
});

export default AuthStore;
