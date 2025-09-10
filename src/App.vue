<template>
  <div id="app">
    <img src="https://picsum.photos/2000/2000" class="w-full h-96 object-cover">
    <img src="https://picsum.photos/1200/1200" class="w-full h-96 object-cover">
    <img src="https://picsum.photos/1400/1400" class="w-full h-96 object-cover">
    <liquid-glass :onClick="handleClick" :cornerRadius="32" :displacementScale="100" :blurAmount="0.5" :elasticity="0" :containerStyle="{
      position: 'fixed',
      top: '20%',
      left: '40%'
    }">
      <Card />
    </liquid-glass>
    <liquid-glass :onClick="handleClick" :cornerRadius="8" padding="0px 0px" :displacementScale="100" :blurAmount="0.5" :elasticity="0" :containerStyle="{
      position: 'fixed',
      top: '45%',
      left: '40%'
    }">
      <button>test</button>
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
    },
    methods: {
      handleClick () {
        console.log('clicked')
      }
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
  }
  button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: #42b983;
    opacity: 0.5;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
</style>
