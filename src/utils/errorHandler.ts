// -errorHandler.ts  http 错误处理
import { Toast } from 'antd-mobile';

export default function errorHandler(error: any) {
  const codeMessage = {
    400: '400 Bad Request.',
    401: '401 Unauthorized.',
    403: '403 Forbidden.',
    404: '404 Not Found.',
    406: '406 Not Acceptable.',
    410: '410 Gone.',
    422: '422 Unprocessable Entity.',
    500: '500 Internal Server Error.',
    502: '502 Bad Gateway.',
    503: '503 Service Unavailable.',
    504: '504 Gateway Timeout.',
  };
  if (error.response) {
    Toast.fail(`${codeMessage[error.response.status]} url : ${error.response.url}`);
  } else {
    // 请求初始化时出错或者没有响应返回的异常
    Toast.fail('Network Issue, Please try again');
  }
}
