<!-- liquid-glass demo -->
<template>
  <div class="relative">
    <div class="absolute w-full">
      <img src="https://picsum.photos/2000/2000" class="w-full h-96 object-cover">
      <div class="w-full text-left">
        <h1>Hello World</h1>
       <p class="px-10">Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger <br>Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger<br>Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger<br>Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger<br>Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger<br>Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger</p>
      </div>
      <img src="https://picsum.photos/1200/1200" class="w-full h-96 object-cover">
      <img src="https://picsum.photos/1400/1400" class="w-full h-96 object-cover">
    </div>
    <div>
      <liquid-glass :cornerRadius="32" :displacementScale="100" :blurAmount="0.5" :elasticity="0" :containerStyle="{position: 'fixed', top: '60%', left: '50%'}">
        <div class="w-72 text-white" style="text-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px, rgba(0, 0, 0, 0.1) 0px 3px 2px, rgba(0, 0, 0, 0.1) 0px 4px 8px;">
          <h3 class="text-xl font-semibold mb-4">User Information</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <div
                class="w-12 h-12 bg-black/10 backdrop-blur rounded-full flex items-center justify-center text-white font-semibold">
                John
              </div>
              <div>
                <p class="font-medium">John</p>
                <p class="text-sm text-white/80">Software Engineer</p>
              </div>
            </div>
            <div class="pt-2 space-y-2">
              <div class="flex justify-between">
                <span class="text-sm text-white/80">Email:</span>
                <span class="text-sm">john@example.com</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-white/80">Location:</span>
                <span class="text-sm">Wanderland, Earth</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-white/80">Join Date:</span>
                <span class="text-sm">March 2023</span>
              </div>
            </div>
          </div>
        </div>
      </liquid-glass>
    </div>
    <div class="pt-10">
      <liquid-glass :onClick="handleClick" :cornerRadius="8" padding="0px 0px" :displacementScale="100" :blurAmount="0.5" :elasticity="0">
        <button>test</button>
      </liquid-glass>
    </div>
  </div>
</template>
<script>
  import LiquidGlass from '../components/liquid-glass/liquid-glass.vue'
  export default {
    name: 'LiquidGlassDemo',
    components: {
      LiquidGlass
    },
    methods: {
      handleClick () {
        console.log('clicked')
      }
    }
  }
</script>
<style lang="stylus" scoped>
  button
    padding: 10px 20px
    border-radius: 5px
    border: none
    background-color: #42b983
    opacity: 0.5
    color: #fff
    font-size: 16px
    cursor: pointer
</style>
