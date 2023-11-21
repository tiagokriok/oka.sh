import { inferAsyncReturnType } from '@trpc/server'
import type { H3Event } from 'h3'

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(event: H3Event) {
  // for API-response caching see https://trpc.io/docs/caching
  // console.log('cookies', parseCookies(event))
  // const authorization = event.node.req.headers.authorization ?? null
  // const getUser = async (): Promise<Omit<
  //   User,
  //   'password' | 'rememberToken'
  // > | null> => {
  //   if (authorization) {
  //     const [, token] = authorization.split(' ')
  //     const { user } = await AccessTokenProvider.decode(token)
  //     return {
  //       ...user,
  //     }
  //   }
  //   return null
  // }
  // const user = await getUser()
  // return {
  //   user,
  //   ...(authorization && { accessToken: authorization }),
  //   ...(user && { accountId: user.account.id }),
  // }
  return {}
}

export type Context = inferAsyncReturnType<typeof createContext>
