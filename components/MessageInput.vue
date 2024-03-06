<template>
  <div class="message-input">
    <MessageInputText v-model="message" @send-message="sendMessage" />
    <MessageInputButton @send-message="sendMessage" />
  </div>
</template>

<script lang="ts" setup>
const message = defineModel<string>({ required: true })

const emit = defineEmits<{
  (e: "messageSent"): void
}>()

const sendMessage = (): void => {
  if (!message.value.trim()) return // Don't send an empty message
  emit("messageSent")
  message.value = "" // Clear the message text box after sending it
}
</script>

<style lang="sass">

.message-input
  display: flex
  flex-direction: row
  align-items: center
  justify-content: center
  gap: 16px

  width: 100%
  max-width: 650px
</style>
