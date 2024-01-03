<template>
  <div class="logo-container">
    <NuxtImg src="/images/wind.svg" id="logo-img"/>
    <h3 id="logo-text">
      <span id="logo-text-vent">Vent</span>
      <span id="logo-text-chat">Chats</span>
    </h3>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="sass">

  @import '/assets/styles/colours'

  .logo-container
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center

    margin: 10px
  



  #logo-img
    width: auto
    height: 60px


  #logo-text
    #logo-text-vent
      color: $accent-colour

</style>