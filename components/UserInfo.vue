<template>
  <div class="user-info">
    <UserInfoAvatar :size="70" />
    <UserInfoName :font-level="2" />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="sass">

.user-info
  display: inline-flex
  flex-direction: row
  align-items: center
  justify-content: flex-start
  gap: 16px
</style>
