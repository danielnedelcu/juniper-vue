<template>
  <div>
    <header-item />
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components : {
    'header-item' : Header
  },    
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main {
  padding: 100px 15px;
  background-color: #eeede5;

  @media (min-width: 1366px) {
    padding-left: 0;
    padding-right: 0;
  }
}

body {
  margin: 0;
}
</style>
