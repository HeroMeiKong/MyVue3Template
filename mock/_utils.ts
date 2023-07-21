// Interface data format used to return a unified format
import type { RequestParams } from '#/request';

import { ResultEnum } from '@/enums/commonEnum';

/**
 * https://github.com/vbenjs/vite-plugin-mock/issues/56
 * 无法使用 import.meta，有警告等待修复
 */
// const url = import.meta.env.VITE_GLOBAL_API_URL;
// const prefixUrl = import.meta.env.VITE_GLOBAL_API_URL_PREFIX;

// export function getBaseUrl() {
//   return prefixUrl ? `${prefixUrl}${url}` : url;
// }

export function resultSuccess<T = Recordable>(result: T, { message = 'ok' } = {}) {
  return {
    code: ResultEnum.SUCCESS,
    result,
    message,
    type: 'success',
  };
}

export function resultPageSuccess<T = any>(
  page: number,
  pageSize: number,
  list: T[],
  { message = 'ok' } = {},
) {
  const pageData = pagination(page, pageSize, list);

  return {
    ...resultSuccess({
      items: pageData,
      total: list.length,
    }),
    message,
  };
}

export function resultError(
  message = 'Request failed',
  { code = ResultEnum.ERROR, result = null } = {},
) {
  return {
    code,
    result,
    message,
    type: 'error',
  };
}

export function pagination<T = any>(pageNo: number, pageSize: number, array: T[]): T[] {
  const offset = (pageNo - 1) * Number(pageSize);
  return offset + Number(pageSize) >= array.length
    ? array.slice(offset, array.length)
    : array.slice(offset, offset + Number(pageSize));
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken({ headers }: RequestParams): string | undefined {
  return headers?.authorization;
}
