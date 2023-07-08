export type ILoginUser = {
  id: string;
  password: string;
};

export type ILogInResponse = {
  accessToken: string;
  refreshToken: string;
  needsPasswordChange: boolean;
};
