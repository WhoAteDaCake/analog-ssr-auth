import {getUser} from "../runtime/oidc/utils/getUser";
import {defineEventHandler, sendRedirect, getRequestPath} from "h3";

export default defineEventHandler(async (event) => {
  if (event.path === '/_analog/pages/protected') {
    const user = await getUser(event);
    console.log(user)
    if (!user) {
      await sendRedirect(event, '/');
      // @ts-ignore
      return;
    }
  }

  // Extends or modify the event
  // event.context.user = {name: 'Nitro'}
})
