<template>
  <Header />
  <section id="home-body">
    <OnlineUsers />
    <Chat class="chat" />
  </section>
</template>

<style lang="sass" scoped>

#home-body
  display: flex
  flex-direction: column
  justify-content: flex-end
  align-items: center
  gap: 30px

  width: 100%
  padding: 25px
  height: 100%
  flex-grow: 1
</style>
