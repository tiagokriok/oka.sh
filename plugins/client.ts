import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import type { AppRouter } from '../server/trpc/routers/index'

export default defineNuxtPlugin(() => {
  const headers = useRequestHeaders()
  /**
   * createTRPCNuxtClient adds a `useQuery` composable
   * built on top of `useAsyncData`.
   */
  const client = createTRPCNuxtClient<AppRouter>({
    links: [
      httpBatchLink({
        url: '/api/trpc',
        headers(opts) {
          return {}
        },
      }),
    ],
  })

  return {
    provide: {
      client,
    },
  }
})
