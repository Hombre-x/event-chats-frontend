<template>
  <button @click="emitClick"><slot></slot></button>
</template>

<script lang="ts" setup>
const emits = defineEmits<{
  (e: "click", payload: MouseEvent): void
}>()

const emitClick = (payload: MouseEvent): void => {
  emits("click", payload)
}
</script>

<style lang="sass" scoped>

@use 'sass:math'
@use '/assets/styles/colours' as *
@use '/assets/styles/typescale' as *

button

  all: unset
  display: flex
  justify-content: center
  align-items: center

  $height: 30px

  cursor: pointer

  width: 120px
  height: $height

  border-radius: $height
  padding: 10px


  text-align: center

  font-size: 20px
  font-weight: bold
</style>
