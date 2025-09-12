<template>
  <div id="app" class="bg-white">
    <el-container class="h-screen overflow-hidden">
      <el-aside width="200px">
        <el-menu :default-active="activeIndex" class="h-full" @select="(index) => { activeIndex = index }">
          <el-menu-item v-for="(component, idx) in componentMap" v-bind:key="component.name" :index="idx.toString()">
            {{ component.name }}
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
    data () {
      return {
        activeIndex: '0',
        componentMap: [
          UnderlineTabs,
          LiquidGlassDemo
        ]
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
