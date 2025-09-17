<template>
  <div class="page" ref="page">
    <shrink-header :height="64" :shrinkHeight="40" :offset="200">
      <div class="header-inner">
        <img class="logo" src="@/assets/logo.png" alt="logo" />
        <div class="title">Headroom Padding Demo</div>
      </div>
    </shrink-header>

    <div class="content">
      <h1>展开高度64px,收起高度40px,滚动距离200px时开始做收缩效果</h1>
      <section v-for="i in 12" :key="i" class="block">
        <h3>Section {{ i }}</h3>
        <p>
          这是演示内容。
        </p>
      </section>
    </div>
  </div>

</template>

<script>
  import ShrinkHeader from '../components/shrink-header/shrink-header.vue'

  export default {
    name: 'ShrinkHeaderDemo',
    components: { ShrinkHeader }
  }
</script>

<style lang="stylus" scoped>
.page
  min-height: 100vh
  background: #f6f8fa

.header-inner
  display: flex
  align-items: center
  gap: 12px
  height: 100%
  background aliceblue
  padding: 0 20px
.logo
  width: 28px
  height: 28px

.title
  font-weight: 600
  color: #111

.right
  margin-left: auto
  color: #666
  font-size: 12px

.content
  padding: 16px 20px

.block
  background: #fff
  border: 1px solid #eee
  border-radius: 8px
  padding: 16px
  margin: 12px 0
  box-shadow: 0 1px 2px rgba(0,0,0,.04)
</style>
