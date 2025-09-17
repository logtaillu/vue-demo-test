<template>
  <headroom
    :offset="offset"
    :upTolerance="tolerance"
    :downTolerance="tolerance"
    :scroller="scroller"
    @pin="() => pinned = true"
    @unpin="() => pinned = false"
  >
    <div class="headroom-height" :style="styles">
      <slot></slot>
    </div>
  </headroom>
</template>
<script>
  import { headroom } from 'vue-headroom'

  export default {
    name: 'HeightHeadroom',
    components: {headroom},
    props: {
      // 高度
      height: {
        type: Number,
        default: 64
      },
      // 收缩高度
      shrinkHeight: {
        type: Number,
        default: 40
      },
      // 滚动触发
      tolerance: {
        type: Number,
        default: 5
      },
      // 偏移
      offset: {
        type: Number,
        default: 200
      },
      scroller: {
        type: Function,
        default: () => {
          return window
        }
      }
    },
    data () {
      return {
        pinned: true
      }
    },
    computed: {
      styles () {
        return {
          height: (this.pinned ? this.height : this.shrinkHeight) + 'px'
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
::v-deep .headroom
  position: fixed !important
  top: 0
  left: 0
  right: 0
  transform: none !important

::v-deep .headroom--pinned
  transform: none !important

::v-deep .headroom--unpinned
  transform: none !important
.headroom-height
  transition: height .25s ease
</style>
