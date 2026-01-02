<template>
  <div class="chat">
    <div class="message-box">
      <TransitionGroup name="message">
        <Message v-for="(message, index) in messages" :key="index">
          {{ message }}
        </Message>
      </TransitionGroup>
      <div class="end-message-box" ref="endMessageBox"></div>
    </div>
    <MessageInput v-model="message" @message-sent="sendMessage" />
  </div>
</template>

<script lang="ts" setup>
const message = ref("")
const messages: Ref<Array<string>> = ref([])
const endMessageBox: Ref<HTMLElement | null> = ref(null)

const getMessageContent = (): string => {
  // Eventually this will gather the message from a Pulsar Topic
  return message.value
}

/**
 * The function cant contain arguments due to how emit function works as message-sent event is beign emmited without any arguments
 */
const sendMessage = (): void => {
  // Eventually this will send the message to a Pulsar Topic
  messages.value.push(message.value)

  nextTick(scrollToBottom)
}

const scrollToBottom = (): void => {
  // Used to scroll to the bottom of the chat when a new message is received
  endMessageBox.value?.scrollIntoView({ behavior: "smooth", block: "end" })
}
</script>

<style lang="sass">

.chat
  display: flex
  justify-content: flex-end
  flex-direction: column
  align-items: center
  gap: 20px

  padding: 25px

  border: 3px solid #545454
  border-radius: 25px

  box-sizing: border-box
  width: 100%
  height: 60vh

.message-box
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: center
  box-sizing: border-box

  overflow: scroll

  scrollbar-width: none

  gap: 10px


  max-width: 800px
  width: 100%
  height: 100%

  .message-enter-active, .message-leave-active
    transition: opacity 0.3s

  .message-enter-from, .message-leave-to
    opacity: 0
</style>
