<template>
  <div id="app">
    <LiquidGlass />
  </div>
</template>

<script>
import LiquidGlass from './components/liquid-glass/liquid-glass.vue'

export default {
  name: 'App',
  components: {
    LiquidGlass
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
