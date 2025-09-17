<template>
  <div id="app" class="bg-white">
    <el-container class="min-h-screen">
      <el-aside width="200px">
        <el-menu :default-active="activeIndex" class="h-full" @select="(index) => { activeIndex = index }">
          <el-menu-item v-for="(component, idx) in componentMap" v-bind:key="component.name" :index="idx.toString()">
            {{ component.name }}
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <component :is="componentMap[activeIndex]" :key="activeIndex" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import LiquidGlassDemo from './demos/liquid-glass-demo.vue'
  import UnderlineTabs from './demos/underline-tabs.vue'
  import ShrinkHeaderDemo from './demos/shrink-header-demo.vue'
  export default {
    name: 'App',
    data () {
      return {
        activeIndex: '2',
        componentMap: [
          UnderlineTabs,
          LiquidGlassDemo,
          ShrinkHeaderDemo
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
  .el-main{
    padding: 0 !important;
    margin-left: 200px;
  }
  .el-aside{
    position: fixed;
    top: 0;
    bottom: 0;
    padding-top: 80px;
  }
</style>
