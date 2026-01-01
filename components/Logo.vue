<template>
  <div class="logo-container">
    <NuxtImg src="../public/svgs/wind.svg" id="logo-img" />
    <div id="logo-text">
      <span id="logo-text-vent">Vent</span>
      <span id="logo-text-chat">Chats</span>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="sass">

@use '/assets/styles/colours' as *
@use '/assets/styles/typescale' as *

.logo-container
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center





#logo-img
  width: auto
  height: 60px


#logo-text
  font-size: perfect-fourth-typescale(4)
  font-weight: bold

  #logo-text-vent
    color: $accent-colour
</style>
