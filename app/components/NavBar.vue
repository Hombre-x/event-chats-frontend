<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li class="login-container">
        <ButtonBase id="btn-signup">Sign Up</ButtonBase>
        <ButtonBase id="btn-login">Log In</ButtonBase>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup></script>

<style lang="sass">

@use '/assets/styles/colours' as *

nav
  ul
    display: flex
    flex-direction: row
    justify-content: flex-end
    align-items: center
    list-style: none
    margin: 0
    padding: 0

    gap: 16px


.login-container
  display: flex
  justify-content: space-around
  align-items: center
  gap: 16px


#btn-signup
  background-color: $accent-colour
  border: 3px solid $accent-colour
  color: $text-colour

#btn-login
  border: 3px solid $accent-colour
  color: $accent-colour
</style>
