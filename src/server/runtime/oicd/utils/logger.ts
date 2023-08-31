import { consola } from 'consola'

export const logger = consola.create({
  defaults: {
    tag: 'analog-openid-connect'
  },
  level: 4
})
