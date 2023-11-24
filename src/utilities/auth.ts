export const decodeJwt = <T>(token: string) =>
  JSON.parse(atob(token.split(".")[1])) as T;
