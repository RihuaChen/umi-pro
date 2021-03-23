/* eslint-disable */
import { Toast } from 'antd-mobile';
import React from 'react';
import { extend } from 'umi-request';
import Qs from 'qs';
import { NEED_REPLACE_NOTIFICATION_APIS } from '@/utils/commonConstantValues';
import errorHandle from './errorHandler';
import { keepLineBreakJSX } from './replaceStrToHtml';

const handleErrorFormat = (url: string, message: React.ReactNode) => {
  for (const api of NEED_REPLACE_NOTIFICATION_APIS) {
    if (url.includes(api)) {
      message = keepLineBreakJSX(message?.toString() || '');
    }
  }
  return message;
};

const request = extend({
  prefix: '/api',
  errorHandler: errorHandle,
  responseType: 'json',
  timeout: 5 * 60 * 1000, // 过期时间 5 分钟，根据需求改动
  paramsSerializer: (params) => {
    return Qs.stringify(params, { encodeValuesOnly: true, encode: true });
  },
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

// 响应拦截器
request.interceptors.response.use(async (response) => {
  const clone = response.clone();
  const { url } = clone;
  const getHeaderContentType = clone.headers.get('Content-Type');
  if (getHeaderContentType?.includes('application/json')) {
    const res = await clone.json();
    if (!res.success) {
      const message = handleErrorFormat(url, res.errorMsg);
      Toast.fail(message);
    }
  }
  return response;
});

export default request;
