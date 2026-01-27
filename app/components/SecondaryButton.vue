<template>
  <button @click="emitClick"><span><slot>Click me!</slot></span></button>
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
@use '@/assets/styles/colours' as colours
@use '@/assets/styles/typescale' as *

button

  all: unset
  display: flex
  justify-content: center
  align-items: center
  padding: 5px 20px
  gap: 10px

  cursor: pointer

  *
    color: inherit

  border-radius: 25px
  background: colours.$background-colour
  color: colours.$text-colour
  transition: background 0.3s ease-in-out

  span
    min-width: 45px
    text-align: center

  &:hover
    background: colours.$background-accent

  &:active
    background: colours.$text-colour
    color: colours.$background-accent
    transition: background 0.1s ease-out, color 0.1s ease-out

</style>