// a demo
declare namespace API {
  export type User = {
    id: number;
    name: string;
    [name: string]: any;
  };

  type ResponseSuccess = {
    success: boolean;
  };

  export type GetUsersResponse = {
    value: User[];
  } & ResponseSuccess;

  export type GetUserResponse = {
    value: User | null;
  } & ResponseSuccess;
}
