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
    <image
      :href="avatarSvg"
      x="3.5"
      y="3.5"
      :height="props.size - 3"
      :width="props.size - 3"
    />
  </svg>
</template>

<script lang="ts" setup>
import { boringAvatarUrl } from "~/src/user/info/boring-avatar"

interface AvatarProps {
  size?: number
  name: string
  square?: boolean
  variant?: "marble" | "beam" | "pixel" | "sunset" | "ring" | "bauhaus"
  colors?: string[]
}

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

<style></style>
