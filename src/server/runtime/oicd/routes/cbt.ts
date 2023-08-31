import { defineEventHandler, setCookie, getCookie } from 'h3'
import { logger } from '../utils/logger'
import { CBT_PAGE_TEMPATE } from '../utils/template'
import {useOicdRuntimeConfig} from "../context";


export default defineEventHandler((event) => {
  logger.debug('[CBT]: oidc/cbt calling')
  const { config } = useOicdRuntimeConfig()
  const res = event.node.res
  const html = CBT_PAGE_TEMPATE

  const sessionkey = config.secret
  const sessionid = getCookie(event, sessionkey)
  // logger.debug('[CBT]:' + sessionid)
  /* setCookie(event, sessionkey, sessionid, {
    maxAge: 24 * 60 * 60 // oneday
  }) */

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    Expires: new Date().toUTCString()
  })
  res.end(html)
})
