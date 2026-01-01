<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    fill="none"
  >
    <circle
      :cx="radius + 2"
      :cy="radius + 2"
      :r="radius"
      fill="#545454"
      stroke="#E5E8EB"
      stroke-width="3"
    />

    <Avatar 
      :size="props.size"
      :name="props.name"
      :square="props.square"
      :variant="props.variant"
      :colors="props.colors"
      />
      
  </svg>
</template>

<script lang="tsx" setup>
import { boringAvatarUrl } from "~/src/user/info/boring-avatar"
import { applyReactInVue } from "veaury"
import type { DefineComponent } from 'vue'

import AvatarReact from 'boring-avatars'

interface AvatarProps {
  size?: number
  name: string
  square?: boolean
  variant?: "marble" | "beam" | "pixel" | "sunset" | "ring" | "bauhaus"
  colors?: string[]
}

const Avatar = applyReactInVue(AvatarReact) as DefineComponent<AvatarProps>

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 40,
  square: false,
  variant: "marble",
  colors: () => ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"],
})

const width = computed(() => props.size + 4)
const height = computed(() => props.size + 4)
const viewBox = computed(() => `0 0 ${width.value} ${height.value}`)
const radius = computed(() => props.size / 2)

const avatarSvg = boringAvatarUrl(
  props.size,
  props.name,
  false,
  props.variant,
  props.colors,
)
</script>

<style lang="sass">

    

</style>
