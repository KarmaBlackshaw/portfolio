<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {

data: () => ({

}),

components: {
  Navbar
}

}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

body,
html {
  margin: 0;
  background: #434446;
  height: 100%;
}

* {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button:focus {
  outline: 0;
}
</style>
