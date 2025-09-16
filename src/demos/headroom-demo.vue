<template>
  <div class="page" ref="page">
    <headroom :offset="offset" :upTolerance="tolerance" :downTolerance="tolerance" :scroller="() => { return $refs.page.parentElement }">
      <div class="header-inner">
        <img class="logo" src="@/assets/logo.png" alt="logo" />
        <div class="title">Headroom Padding Demo</div>
        <div class="right">下滚收起为窄 padding，上滚恢复</div>
      </div>
    </headroom>

    <div class="content">
      <section v-for="i in 12" :key="i" class="block">
        <h3>Section {{ i }}</h3>
        <p>
          这是演示内容。滚动页面观察顶部栏：下滚时不会完全隐藏，而是通过减少内边距来“收起”；上滚时恢复较大的内边距。
        </p>
      </section>
    </div>
  </div>

</template>

<script>
  import { headroom } from 'vue-headroom'

  export default {
    name: 'HeadroomDemo',
    components: { headroom },
    data () {
      return {
        // 触发收起/展开的偏移与容差，可按需调整
        offset: 80,
        tolerance: 5
      }
    }
  }
</script>

<style lang="stylus" scoped>
.page
  min-height: 100vh
  background: #f6f8fa

// 关键：覆盖 Headroom 的默认位移隐藏行为，改为 padding 变化
// Headroom 容器本身
::v-deep .headroom
  position: sticky
  top: 0
  left: 0
  right: 0
  z-index: 10
  background: #ffffffcc
  backdrop-filter: blur(6px)
  -webkit-backdrop-filter: blur(6px)
  border-bottom: 1px solid rgba(0,0,0,.06)
  transition: padding .25s ease, box-shadow .25s ease, background .25s ease
  // 禁止位移隐藏
  transform: none !important

// 上滚（固定/展开）
::v-deep .headroom--pinned
  transform: none !important
  padding: 16px 20px
  box-shadow: 0 4px 16px rgba(0,0,0,.06)

// 下滚（收起为更小的 padding，而非移出视口）
::v-deep .headroom--unpinned
  transform: none !important
  padding: 6px 16px
  box-shadow: 0 1px 4px rgba(0,0,0,.06)
  background: #ffffffbf

.header-inner
  display: flex
  align-items: center
  gap: 12px

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
