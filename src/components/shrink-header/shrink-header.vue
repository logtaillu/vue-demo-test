<template>
  <div :style="{height: `${height}px`}" class="shrink-header-wrapper">
    <div :style="styles" class="shrink-header">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ShrinkHeader',
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
      upTolerance: {
        type: Number,
        default: 5
      },
      downTolerance: {
        type: Number,
        default: 0
      },
      // 距离顶部多少距离开始可以收缩
      offset: {
        type: Number,
        default: 200
      },
      // 滚动容器
      scroller: {
        type: Function,
        default: () => {
          return window
        }
      }
    },
    data () {
      return {
        shrink: false,
        currentScrollY: 0,
        lastScrollY: undefined
      }
    },
    computed: {
      styles () {
        return {
          height: (this.shrink ? this.shrinkHeight : this.height) + 'px'
        }
      }
    },
    methods: {
      // 获取y向滚动距离
      getScrollY () {
        let top
        if (this.scroller().pageYOffset !== undefined) {
          top = this.scroller().pageYOffset
        } else if (this.scroller().scrollTop !== undefined) {
          top = this.scroller().scrollTop
        } else {
          top = (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop
        }
        return top
      },
      update () {
        this.currentScrollY = this.getScrollY()
        // 初始或者滚动距离小于offset
        if (this.lastScrollY === undefined || this.currentScrollY <= this.offset) {
          this.shrink = false
        } else {
          const direction = this.currentScrollY >= this.lastScrollY ? 'down' : 'up'
          const distanceScrolled = Math.abs(this.currentScrollY - this.lastScrollY)
          if (direction === 'down' && distanceScrolled > this.downTolerance) {
            this.shrink = true
          } else if (direction === 'up' && distanceScrolled > this.upTolerance) {
            this.shrink = false
          }
        }
        this.lastScrollY = this.currentScrollY
      },
      handleScroll () {
        requestAnimationFrame(this.update)
      }
    },
    // 挂载和移除监听器
    mounted () {
      this.scroller().addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy () {
      this.scroller().removeEventListener('scroll', this.handleScroll)
    }
  }
</script>
<style lang="stylus" scoped>
.shrink-header
  transition: height .25s ease
  position fixed
  top 0
  right 0
  left 0
</style>
