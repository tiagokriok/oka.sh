<script lang="ts" setup>
  import { usePreferredLanguages } from '@vueuse/core'

  const languages = usePreferredLanguages()

  const { setLocale } = useI18n()

  setLocale(languages.value[0] || 'en-US')
</script>
<template>
  <Container>
    <div class="m-4 font-lato">
      Default Layout
      <slot />
    </div>
  </Container>
</template>
