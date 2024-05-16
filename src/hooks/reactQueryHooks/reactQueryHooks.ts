import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { UrlBuilder } from '@/types/common';
import { Api, buildUrl } from '@/utils/apis';

export const fetcher = async <TResponse, TVariables = undefined>(
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  url: UrlBuilder<TVariables> | string,
  variables?: TVariables
): Promise<TResponse> => {
  const dynamicUrl = buildUrl(url, variables);
  try {
    let response;
    if (method === 'get' || method === 'delete') {
      // `get`과 `delete` 메소드는 URL 파라미터를 사용합니다.
      const params = variables as object;
      response = await Api[method]<TResponse>(dynamicUrl, params);
    } else {
      // `post`, `put`, `patch` 메소드는 요청 바디에 데이터를 포함합니다.
      response = await Api[method]<TResponse>(dynamicUrl, variables as object);
    }
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      // AxiosError의 경우, 더 상세한 에러 처리를 할 수 있습니다.
      throw new Error(
        `API request failed with status ${error.response?.status}: ${error.message}`
      );
    } else {
      throw new Error('An unknown error occurred during the API request.');
    }
  }
};

// CustomQuery
export const useCustomQuery = <TData, TVariables>(
  url: string | UrlBuilder<TVariables>,
  variables: TVariables,
  options?: UseQueryOptions<TData>
) => {
  const queryKey = [url, JSON.stringify(variables)];

  return useQuery<TData>({
    queryKey,
    queryFn: () => fetcher('get', url, variables),
    ...options,
  });
};

// customMutation

export const useCustomMutation = <TData, TVariables, TError = Error>(
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  url: UrlBuilder<TVariables> | string,
  options?: UseMutationOptions<TData, TError, TVariables>
) =>
  useMutation<TData, TError, TVariables>({
    ...options,
    mutationFn: (variables: TVariables) =>
      fetcher<TData, TVariables>(method, url, variables),
  });
