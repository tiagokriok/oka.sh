import type { EventHandler, EventHandlerRequest } from 'h3'

export const defineProtectedHandler = <T extends EventHandlerRequest, D>(
  handler: EventHandler<T, D>,
): EventHandler<T, D> =>
  defineEventHandler<T>(async (event) => {
    const start = Date.now()
    try {
      return await handler(event)
    } catch (err) {
      // Error handling
      console.error(err)
    } finally {
      const durationMs = Date.now() - start
      console.info(
        `[API] - ${event.method.toUpperCase()} ${event.path} - ${
          event.node.res.statusCode
        } - took ${durationMs}ms`,
      )
    }
  })
