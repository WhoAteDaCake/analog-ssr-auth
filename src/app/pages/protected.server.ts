import {PageServerLoad} from "@analogjs/router";
import {getUser} from "../../server/runtime/oidc/utils/getUser";
import { sendRedirect } from "h3";

export const load = async ({ fetch, event }: PageServerLoad) => {
  // const user = await getUser(event);
  // if (!user) {
  //   await sendRedirect(event, '/');
  //   // @ts-ignore
  //   return;
  // }
  console.log('loading')
  // setCookie(event, 'test', 'test');
  // const products = await fetch<Product[]>('/api/v1/products');

  return {};
};
