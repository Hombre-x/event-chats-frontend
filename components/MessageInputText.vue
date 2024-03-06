<template>
  <input
    type="text"
    placeholder="Type here..."
    v-model="message"
    @keypress.enter="emitSendMessage"
  />
</template>

<script lang="ts" setup>
const message = defineModel()

const emit = defineEmits<{
  (e: "sendMessage", payload: KeyboardEvent): void
}>()

const emitSendMessage = (payload: KeyboardEvent): void => {
  emit("sendMessage", payload)
}
</script>

<style lang="sass">
@import '/assets/styles/colours'

$height: 50px

input
  height: $height
  width: 100%

  border: 3px solid $text-colour
  border-radius: $height

  padding-right: 25px
  padding-left: 25px

  background: $background-accent

  outline: none
</style>
