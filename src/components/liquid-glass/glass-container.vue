/* ---------- SVG filter (edge-only displacement) ---------- */
<template>
  <div :class="`glass-container ${active ? 'active' : ''} ${Boolean(onClick) ? 'is-pointer' : ''}`" @click="handleClick">
    <glass-filter :id="filterId" :mode="mode" :displacementScale="displacementScale" :shaderMapUrl="shaderMapUrl"
      :aberrationIntensity="aberrationIntensity" :width="glassSize.width" :height="glassSize.height"></glass-filter>
    <div class="glass" :style="{
      borderRadius: `${cornerRadius}px`,
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '24px',
      padding,
      overflow: 'hidden',
      transition: 'all 0.2s ease-in-out',
      boxShadow: overLight ? '0px 16px 70px rgba(0, 0, 0, 0.75)' : '0px 12px 40px rgba(0, 0, 0, 0.25)',
    }" @mousedown="onMouseDown" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @mouseup="onMouseUp">
      <span class="glass__warp" :style="{
        ...backdropStyle,
        position: 'absolute',
        inset: '0',
      }"></span>
      <div class="glass-sharp" :style="{
        position: 'relative',
        zIndex: 1,
        font: '500 20px/1 system-ui',
        textShadow: overLight ? '0px 2px 12px rgba(0, 0, 0, 0)' : '0px 2px 12px rgba(0, 0, 0, 0.4)',
      }">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  import GlassFilter from './glass-filter.vue'
  import {nanoid} from 'nanoid'
  import {
    generateShaderDisplacementMap
  } from './utils/liquid-utils'
  export default {
    name: 'GlassContainer',
    components: {
      GlassFilter
    },
    props: {
      displacementScale: {
        type: Number,
        default: 25
      },
      blurAmount: {
        type: Number,
        default: 12
      },
      saturation: {
        type: Number,
        default: 180
      },
      aberrationIntensity: {
        type: Number,
        default: 2
      },
      active: {
        type: Boolean,
        default: true
      },
      overLight: {
        type: Boolean,
        default: false
      },
      cornerRadius: {
        type: Number,
        default: 999
      },
      padding: {
        type: String,
        default: '24px 32px'
      },
      glassSize: {
        type: Object,
        default: () => ({width: 270, height: 69})
      },
      mode: {
        type: String,
        default: 'standard'
      },
      onMouseEnter: Function,
      onMouseLeave: Function,
      onMouseDown: Function,
      onMouseUp: Function,
      onClick: Function
    },
    computed: {
      backdropStyle () {
        const isFirefox = navigator.userAgent.toLowerCase().includes('firefox')
        return {
          filter: isFirefox ? null : `url(#${this.filterId})`,
          backdropFilter: `blur(${(this.overLight ? 12 : 4) + this.blurAmount * 32}px) saturate(${this.saturation}%)`
        }
      },
      shaderDependencies () {
        return {
          mode: this.mode,
          width: this.glassSize.width,
          height: this.glassSize.height
        }
      }
    },
    data () {
      return {
        filterId: nanoid(),
        shaderMapUrl: ''
      }
    },
    watch: {
      shaderDependencies: {
        handler () {
          if (this.mode === 'shader') {
            this.shaderMapUrl = generateShaderDisplacementMap(this.glassSize.width, this.glassSize.height)
          }
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      handleClick () {
        if (this.onClick) {
          this.onClick()
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .glass-container
    position: relative
  .glass-container.is-pointer
    cursor: pointer
  .glass-sharp
    transition: all 150ms ease-in-out
    color: white
</style>
