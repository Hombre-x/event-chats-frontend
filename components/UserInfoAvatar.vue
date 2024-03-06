<template>
  <div>
    <BoringAvatar
      class="user-info-avatar"
      :name="userStore.name"
      :size="props.size"
      variant="beam"
      :colors="['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']"
    />
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "~/composables/userStore"

const props = defineProps<{ size: number }>()

const theme = { size: `${props.size}px` }

const userStore = useUserStore()
</script>

<style lang="sass">
.user-info-avatar
  width: v-bind("theme.size")
  height: v-bind("theme.size")
</style>
