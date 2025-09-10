<template>
  <div id="app">
    <liquid-glass :cornerRadius="32" :displacementScale="100" :blurAmount="0.5" :elasticity="0" class="test" :containerStyle="{
    }">
      <Card />
    </liquid-glass>
  </div>
</template>

<script>
  import LiquidGlass from './components/liquid-glass/liquid-glass.vue'
  import Card from './card.vue'
  export default {
    name: 'App',
    components: {
      LiquidGlass,
      Card
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
  button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: #42b983;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
</style>
