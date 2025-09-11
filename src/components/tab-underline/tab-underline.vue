<template>
  <span @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" class="tab-underline">
    <slot></slot>
    <div ref="drawline" class="text-draw__box"></div>
  </span>
</template>
<script>
  import {svgVariants, decorateSVG} from './underline-util'
  import gsap from 'gsap'

  export default {
    name: 'TabUnderline',
    props: {
      nextIndex: {
        type: Number,
        default: null
      }
    },
    computed: {
      index: {
        get () {
          return this.nextIndex
        },
        set (value) {
          this.$emit('update:nextIndex', value)
        }
      }
    },
    data () {
      return {
        enterTween: null,
        leaveTween: null
      }
    },
    methods: {
      onMouseEnter () {
        console.log('enter', this.$slots.default[0].text)
        const box = this.$refs.drawline
        if (this.enterTween && this.enterTween.isActive()) {
          return
        }
        if (this.leaveTween && this.leaveTween.isActive()) {
          this.leaveTween.kill()
        }
        let index = this.index
        if (this.index === null) {
          index = Math.floor(Math.random() * svgVariants.length)
          this.index = index
        }
        box.innerHTML = svgVariants[index]
        const svg = box.querySelector('svg')
        if (svg) {
          decorateSVG(svg)
          const path = svg.querySelector('path')
          if (path) {
            gsap.set(path, { drawSVG: '0%' })
            this.enterTween = gsap.to(path, {
              duration: 0.5,
              drawSVG: '100%',
              ease: 'power2.inOut',
              onComplete: () => { this.enterTween = null }
            })
          }
        }
        this.index = (this.index + 1) % svgVariants.length
      },
      onMouseLeave () {
        console.log('leave', this.$slots.default[0].text)
        const box = this.$refs.drawline
        const path = box.querySelector('path')
        if (!path) {
          return
        }
        const playOut = () => {
          // Don't restart if still drawing out
          if (this.leaveTween && this.leaveTween.isActive()) {
            return
          }
          this.leaveTween = gsap.to(path, {
            duration: 0.5,
            drawSVG: '100% 100%',
            ease: 'power2.inOut',
            onComplete: () => {
              this.leaveTween = null
              box.innerHTML = '' // remove SVG when done
            }
          })
        }
        if (this.enterTween && this.enterTween.isActive()) {
          // Wait until draw-in finishes
          this.enterTween.eventCallback('onComplete', playOut)
        } else {
          playOut()
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
.tab-underline
  display: inline-block
.text-draw__box
  color: #e55050
  width: 100%
  height: .625em
  position: absolute
  bottom: 0
  left: 0
  pointer-events: none
::v-deep .text-draw__box-svg
  width: 100%
  height: 100%
  padding: 0 20px
  overflow: visible !important
</style>
