<template>
  <header>
    <UserInfo id="user-info-component" />
    <Logo id="logo-component" />
    <NavBar id="navbar-component" />
  </header>
</template>

<script lang="ts" setup></script>

<style lang="sass">

header
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  padding: 25px


#user-info-component, #navbar-component
  flex: 1

#logo-component
  flex: 1
</style>
