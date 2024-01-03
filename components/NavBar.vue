<template>
  <nav>
    <ul>
      <li><ButtonLogin id="btn-signup">Sign Up</ButtonLogin></li>
      <li><ButtonLogin id="btn-login">Log In</ButtonLogin></li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>

</script>

<style lang="sass">

  @import '/assets/styles/colours'

  nav

    ul
      display: flex
      justify-content: space-around
      align-items: center
      list-style: none
      padding: 0
      margin: 0
      

  #btn-signup
    background-color: $secondary-colour
    border: 5px solid $secondary-colour
    color: $text-colour

  #btn-login
    border: 5px solid $primary-colour
    color: $primary-colour

</style>