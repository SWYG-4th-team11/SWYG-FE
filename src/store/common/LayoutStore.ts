import { atom } from 'recoil';

// 레이아웃 크기 상태 관리 리코일
const LayoutStore = atom({
  key: 'LayoutStore',
  default: 'Horizontal',
});

export default LayoutStore;
