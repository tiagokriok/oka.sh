import en from './en-US'
import es from './es-ES'
import br from './pt-BR'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en-US',
  fallbackLocale: 'en-US',
  availableLocales: ['en-US', 'es-ES', 'pt-BR'],
  messages: {
    'en-US': en,
    'es-ES': es,
    'pt-BR': br,
  },
}))
