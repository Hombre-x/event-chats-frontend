<template>
  <button @click="showAlert"><slot></slot></button>   
</template>

<script lang="ts" setup>

const showAlert = () => {
  alert("You clicked the button!")
}

</script>

<style lang="sass">

  @import '/assets/styles/colours'
  @import '/assets/styles/typescale'

  button
    all: unset
    cursor: pointer

    width: 7vw
    height: 100%

    border-radius: 50px
    padding: 5px


    text-align: center

    font-size: $perfect-fourth * 1rem
    font-weight: 500

    

</style>