import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";
import { signOut } from "../contexts/AuthContext";
import { AuthTokenError } from "./errors/AuthTokenError";

let isRefreshing = false;
let failedRequestsQueue = []
 


export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
      Authorization: `Bearer ${cookies["next.token"]}`,
    },
  });
  
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response.status === 401) {
        if (error.response.data?.code === "token.expired") {
          //renovar o token
          cookies = parseCookies(ctx);
          const { "next.refreshToken": refreshToken } = cookies;
          const originalConfig = error.config;
          if (!isRefreshing) {
            isRefreshing = true;
            api
              .post("/refresh", {
                refreshToken,
              })
              .then((response) => {
                const { token } = response.data;
                setCookie(ctx, "next.token", token, {
                  maxAge: 30 * 24 * 60 * 60,
                  path: "/",
                });
                setCookie(
                  ctx,
                  "next.refreshToken",
                  response.data.refreshToken,
                  {
                    maxAge: 30 * 24 * 60 * 60,
                    path: "/",
                  }
                );
  
                api.defaults.headers["Authorization"] = `Bearer ${token}`;
                failedRequestsQueue.forEach(req => req.onSuccess(token))
                failedRequestsQueue = []
              }).catch(error => {
                failedRequestsQueue.forEach(req => req.onFailure(error))
                failedRequestsQueue = []
                if(process.browser){
                  signOut()
                }
              }).finally(() => isRefreshing = false);
          }
          return new Promise((resolve, reject) => {
            //interceptar a requisição e retornar uma nova requisição, não funciona com await
            failedRequestsQueue.push({
              onSuccess: (token: string)=> {
                if(!originalConfig) return;
                originalConfig.headers['Authorization'] = `Bearer ${token}`
        
                resolve(api(originalConfig))
              },
              onFailure: (error: AxiosError)=> {
                reject(error)
              }
            })
          })
        } else {
          //deslogar usuário
          if(process.browser){
  
            signOut()
          } else {
            return Promise.reject(new AuthTokenError())
          }
        }
      }
      return Promise.reject(error)
    });
  return api
}
