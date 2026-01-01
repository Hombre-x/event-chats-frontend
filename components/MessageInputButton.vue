<template>
  <button class="message-input-button" @click="emitSendMessage">
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserve-aspect-ratio="none"
    >
      <g id="message-input-button-svg">
        <circle
          id="message-input-button-circle"
          cx="27"
          cy="27"
          r="25"
          stroke-width="3"
        />
        <path
          id="message-input-button-plane"
          d="M16.5755 39.375L42.4455 28.3554C43.6464 27.8397 43.6464 26.1603 42.4455 25.6446L16.5755 14.625C15.5971 14.1978 14.5148 14.9197 14.5148 15.9657L14.5 22.7572C14.5 23.4938 15.0485 24.1272 15.7898 24.2156L36.7378 27L15.7898 29.7696C15.0485 29.8728 14.5 30.5062 14.5 31.2428L14.5148 38.0343C14.5148 39.0803 15.5971 39.8022 16.5755 39.375Z"
        />
      </g>
    </svg>
  </button>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: "sendMessage"): void
}>()

const emitSendMessage = (): void => {
  emit("sendMessage")
}
</script>

<style lang="sass" scoped>

@use '/assets/styles/colours' as *

.message-input-button
  all: unset
  cursor: pointer
  background: none

  display: grid
  place-items: center

  border-radius: 50px

#message-input-button-svg

  width: 50px
  height: 50px
  border-radius: 50px



  #message-input-button-circle
    fill: $accent-colour
    stroke: $text-colour
    transition: fill 0.1s ease-in-out

  #message-input-button-plane
    fill: $secondary-colour
    transition: fill 0.1s ease-in-out


  &:active

    #message-input-button-circle
      fill: $secondary-colour

    #message-input-button-plane
      fill: $text-colour
</style>
