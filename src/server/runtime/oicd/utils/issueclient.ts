import { Issuer } from 'openid-client'
import { OidcProvider } from '../types';
import { logger } from './logger'

export const initClient = async (op: OidcProvider, req: any, redirectUris: string[]) => {
  const { config } = useRuntimeConfig().openidConnect
  const issuer = await Issuer.discover(op.issuer)
  logger.trace('Discovered issuer %s %O', issuer.issuer, issuer.metadata)
  const client = new issuer.Client({
    client_id: op.clientId,
    client_secret: op.clientSecret,
    redirect_uris: redirectUris,
    response_type: config.response_type
    // id_token_signed_response_alg (default "RS256")
  }) // => Client

  return client
}
