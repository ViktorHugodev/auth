import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { destroyCookie, parseCookies } from "nookies";
import { AuthTokenError } from "../services/errors/AuthTokenError";

//recebe uma FN, getServerSideProps e retorna uma FN- High order function
//faz a verificacao dos cookies no lado do servidor
export function withSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    if (!cookies["next.token"]) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    try {
      return await fn(ctx)
    } catch (error) {
      console.log(error instanceof AuthTokenError)
      if(error instanceof AuthTokenError){
        destroyCookie(ctx, 'next.token')
        destroyCookie(ctx, 'next.refreshToken')
        return { 
          redirect: {
            destination: '/',
            permanent: false,
          }
        }
      }
      
    }
  };

}
