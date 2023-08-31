
export type CookieSerializeOptions = {
  domain?: string | undefined;
  encode?(value: string): string;
  expires?: Date | undefined;
  httpOnly?: boolean | undefined;
  maxAge?: number | undefined;
  path?: string | undefined;
  sameSite?: true | false | 'lax' | 'strict' | 'none' | undefined;
  secure?: boolean | undefined;
}

export type OidcProvider = {
  issuer: string,
  clientId: string,
  clientSecret: string,
  callbackUrl: string,
  scope: Array<string>
}

export type Config = {
  secret: string,
  cookie: {},
  cookiePrefix: string,
  cookieEncrypt: boolean,
  cookieEncryptKey: string,
  cookieEncryptIV: string,
  cookieEncryptALGO: string,
  cookieMaxAge: number,
  response_type: string,
  response_mode?: string,
  cookieFlags?: {
    [key: string]: CookieSerializeOptions,
  }
  debug?: boolean | undefined,
}

export interface ModuleOptions {
  addPlugin: boolean,
  op: OidcProvider,
  config: Config
}
