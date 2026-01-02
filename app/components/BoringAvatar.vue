<template>
  <div class="avatar-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :viewBox="viewBox"
      fill="none"
      class="avatar-outer-circle-svg"
    >
      <circle
        :cx="radius + strokeWidth / 2"
        :cy="radius + strokeWidth / 2"
        :r="radius"
        fill="#545454"
        stroke="#E5E8EB"
        :stroke-width="strokeWidth"
      />
    </svg>

    <Avatar 
      class="boring-avatar"
      :size="props.size - strokeWidth"
      :name="props.name"
      :square="props.square"
      :variant="props.variant"
      :colors="props.colors"
    />
  </div>
</template>

<script lang="ts" setup>
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

// Stroke width constant
const strokeWidth = 4

const width = computed(() => props.size + strokeWidth)
const height = computed(() => props.size + strokeWidth)
const viewBox = computed(() => `0 0 ${width.value} ${height.value}`)
const radius = computed(() => props.size / 2)

const cssWidth = computed(() => `${width.value}px`)
const cssHeight = computed(() => `${height.value}px`)
const cssStrokeWidth = computed(() => `${strokeWidth}px`)
</script>

<style lang="sass" scoped>
.avatar-container
  position: relative
  width: v-bind(cssWidth)
  height: v-bind(cssHeight)

.boring-avatar
  position: absolute
  top: v-bind(cssStrokeWidth)
  left: v-bind(cssStrokeWidth)
</style>