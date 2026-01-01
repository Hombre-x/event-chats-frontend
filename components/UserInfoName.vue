<template>
  <div class="user-info-name">{{ user.name }}</div>
</template>

<script lang="ts" setup>
import { useUserStore } from "~/composables/userStore"
import { perfectFourthTypescale } from "~/src/lib/fonts/typescale"

const props = defineProps<{
  fontLevel: number
}>()

const user = useUserStore()

const fontSize = perfectFourthTypescale(props.fontLevel)
const theme = {
  fontSize: fontSize,
}
</script>

<style lang="sass">

@use '/assets/styles/typescale' as *

.user-info-name
  font-size: v-bind("theme.fontSize")
  font-weight: bold
</style>
