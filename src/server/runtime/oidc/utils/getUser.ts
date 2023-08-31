import {getCookie, H3Event} from 'h3';
import {useOicdRuntimeConfig} from "../context";
import {isSet} from "./shared";
import {decrypt} from "./encrypt";

export type User = {}

export async function getUser(event: H3Event): Promise<User | null> {
  const { config } = useOicdRuntimeConfig();
  const userinfoCookie = getCookie(event, config.cookiePrefix + 'user_info')
  if (isSet(userinfoCookie)) {
    const userInfoStr = await decrypt(userinfoCookie as string, config)
    if (userInfoStr) {
      const userinfo = JSON.parse(userInfoStr)
      return userinfo;
    } else {
      return null
    }
  }
  return null;
}
