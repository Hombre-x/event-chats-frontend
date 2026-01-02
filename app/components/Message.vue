<template>
  <div class="message-info">
    <UserInfoAvatar :size="60" />
    <div class="message-text">
      <UserInfoName :font-level="1" />
      <p><slot></slot></p>
    </div>
  </div>
</template>

<style lang="sass" scoped>

@use '/assets/styles/colours' as *

div
  background: $background-accent

.message-info
  display: flex
  flex-direction: row
  align-items: flex-start
  gap: 16px

  width: 100%
  max-width: 800px
  padding: 25px

  border-radius: 25px
  background: $background-accent

.message-text
  display: flex
  flex-direction: column
  gap: 10px
  align-self: stretch

  word-break: break-all

  p
    color: $text-colour
    font-size: 1rem
    font-style: normal
    font-weight: 400
    line-height: normal

    margin: 0
</style>
