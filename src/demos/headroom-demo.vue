<template>
  <div class="page" ref="page">
    <height-headroom
    :offset="offset"
    :tolerance="tolerance"
    :scroller="() => { return $refs.page.parentElement }"
    >
      <div class="header-inner">
        <img class="logo" src="@/assets/logo.png" alt="logo" />
        <div class="title">Headroom Padding Demo</div>
      </div>
    </height-headroom>

    <div class="content">
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
  import HeightHeadroom from '../components/height-headroom/height-headroom.vue'

  export default {
    name: 'HeadroomDemo',
    components: { HeightHeadroom },
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

.header-inner
  display: flex
  align-items: center
  gap: 12px
  height: 100%
  background aliceblue
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
