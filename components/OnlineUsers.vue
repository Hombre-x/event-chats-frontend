<template>
  <div>
    <span class="online-users-text">Users Online: </span>
    <span class="online-users-number">{{ numberOfOnlineUsers }}</span>
  </div>
</template>

<script lang="ts" setup>
const numberOfOnlineUsers = ref(0)
</script>

<style lang="sass">

@use '/assets/styles/colours' as *
@use '/assets/styles/typescale' as *

div
  .online-users-text
    font-size: perfect-fourth-typescale(3)
    color: $text-colour
    font-weight: bold

  .online-users-number
    font-size: perfect-fourth-typescale(3)
    color: $accent-colour
    font-weight: bold
</style>
