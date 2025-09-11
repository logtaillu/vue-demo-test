<template>
  <div id="app">
    <el-container class="h-screen overflow-hidden">
      <el-aside width="200px">
        <el-menu class="h-full" @select="(index) => { activeIndex = index }">
          <el-menu-item index="1">
            liquid glass
          </el-menu-item>
          <el-menu-item index="2">
            underline tabs
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="overflow-hidden">
        <component :is="componentMap[activeIndex]" :key="activeIndex" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import LiquidGlassDemo from './demos/liquid-glass-demo.vue'
  import UnderlineTabs from './demos/underline-tabs.vue'
  export default {
    name: 'App',
    components: {
      LiquidGlassDemo
    },
    data () {
      return {
        activeIndex: '2',
        componentMap: {
          1: LiquidGlassDemo,
          2: UnderlineTabs
        }
      }
    },
    methods: {
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
</style>
