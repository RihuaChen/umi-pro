import request from '@/utils/request';

// normal request
export const getUsers = async (): Promise<API.GetUsersResponse> => {
  return await request('/users');
};

// hooks request
export const getUser = (userId: number) => (): Promise<API.GetUserResponse> =>
  request(`/users/${userId}`);
