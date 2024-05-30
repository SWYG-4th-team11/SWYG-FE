import axios, { AxiosInstance } from 'axios';
import { QueryClient } from '@tanstack/react-query';
import { UrlBuilder } from '@/types/common';

export class Api {
  static instance: AxiosInstance = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_DEV_BE_URL, // 백엔드 서버 주소
    baseURL: '/api', // 백엔드 서버 주소
    withCredentials: true, // 쿠키 전송 여부
    headers: {
      'Content-Type': 'application/json',
    },
  });

  static init = () => {
    const token = localStorage.getItem('token');
    if (token) {
      Api.addToken(token); // 토큰이 있다면 헤더에 추가
    }
  };

  //   로그인 방식에 따라 토큰, 세션에 따라 수정 필요
  static addToken = (token: string) => {
    localStorage.setItem('token', token); // 토큰 저장
    Api.instance.defaults.headers.common.Authorization = `Bearer ${token}`; // 헤더에 토큰 추가
  };

  static addId = (id: number) => {
    localStorage.setItem('id', id.toString());
  };

  static removeToken = () => {
    localStorage.removeItem('token'); // 토큰 삭제
    localStorage.removeItem('id');
    delete Api.instance.defaults.headers.common.Authorization; // 헤더에서 토큰 삭제
  };

  static get = async <T>(url: string, params?: object) =>
    Api.instance.get<T>(url, { params }).then((res) => res.data);

  static post = async <T>(url: string, body?: object) =>
    Api.instance.post<T>(url, body).then((res) => res.data);

  static put = async <T>(url: string, body?: object) =>
    Api.instance.put<T>(url, body).then((res) => res.data);

  static patch = async <T>(url: string, body?: object) =>
    Api.instance.patch<T>(url, body).then((res) => res.data);

  static delete = async <T>(url: string) =>
    Api.instance.delete<T>(url).then((res) => res.data);

  static postForm = async <T>(url: string, body: FormData) =>
    Api.instance
      .post<T>(url, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data);
}

export const buildUrl = <T>(url: UrlBuilder<T> | string, data: T = {} as T) =>
  typeof url === 'function' ? url(data) : url;

export const buildQueryKey = <T>(
  queryKey: UrlBuilder<T> | string,
  params?: T
) => {
  const dynamicUrl = buildUrl(queryKey, params);
  return [dynamicUrl, params];
};

Api.instance.interceptors.request.use(
  (config) =>
    // console.log(`Request URL: ${config.baseURL}${config.url}`);

    // 요청의 헤더, 메소드, 데이터 등 추가 정보를 찍고 싶다면 여기서 추가로 로그를 찍을 수 있습니다.
    config,
  (error) =>
    // 요청 설정에 문제가 있어 실패한 경우의 에러 처리를 여기서 합니다.
    // console.log('error', error);
    Promise.reject(error)
);

export const queryClient = new QueryClient();
