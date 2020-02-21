<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

body {
  margin: 0;
  background: #434446;
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
