<template>
  <div class="liquid-glass-container">
  <!-- Over light effect -->
  <div :class="`liquid-glass-first ${overLight ? 'liquid-glass-overlight' : ''}`" :style="{
    ...positionStyles,
    height: glassSize.height,
    width: glassSize.width,
    borderRadius: `${cornerRadius}px`,
    transform: baseStyle.transform,
    transition: baseStyle.transition,
  }"></div>
  <div :class="`liquid-glass-second ${overLight ? 'liquid-glass-overlight' : ''}`" :style="{
    ...positionStyles,
    height: glassSize.height,
    width: glassSize.width,
    borderRadius: `${cornerRadius}px`,
    transform: baseStyle.transform,
    transition: baseStyle.transition,
  }"></div>
  <glass-container ref="glassRef" :style="baseStyle" :cornerRadius="cornerRadius"
    :displacementScale="overLight ? displacementScale * 0.5 : displacementScale" :blurAmount="blurAmount"
    :saturation="saturation" :aberrationIntensity="aberrationIntensity" :glassSize="glassSize" :padding="padding"
    :onMouseEnter="() => isHovered = true" :onMouseLeave="() => isHovered = false"
    :onMouseDown="() => isActive = true" :onMouseUp="() => isActive = false" :active="isActive" :overLight="overLight"
    :mode="mode" :onClick="onClick">
    <slot></slot>
  </glass-container>
  <!-- Border layer 1 - extracted from glass container -->
  <span :style="{
    ...positionStyles,
    height: glassSize.height,
    width: glassSize.width,
    borderRadius: `${cornerRadius}px`,
    transform: baseStyle.transform,
    transition: baseStyle.transition,
    pointerEvents: 'none',
    mixBlendMode: 'screen',
    opacity: 0.2,
    padding: '1.5px',
    WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    boxShadow: '0 0 0 0.5px rgba(255, 255, 255, 0.5) inset, 0 1px 3px rgba(255, 255, 255, 0.25) inset, 0 1px 4px rgba(0, 0, 0, 0.35)',
    background: `linear-gradient(
          ${135 + resultMouseOffset.x * 1.2}deg,
          rgba(255, 255, 255, 0.0) 0%,
          rgba(255, 255, 255, ${0.12 + Math.abs(resultMouseOffset.x) * 0.008}) ${Math.max(10, 33 + resultMouseOffset.y * 0.3)}%,
          rgba(255, 255, 255, ${0.4 + Math.abs(resultMouseOffset.x) * 0.012}) ${Math.min(90, 66 + resultMouseOffset.y * 0.4)}%,
          rgba(255, 255, 255, 0.0) 100%
        )`,
  }"></span>
  <!-- Border layer 2 - duplicate with mix-blend-overlay -->
  <span :style="{
    ...positionStyles,
    height: glassSize.height,
    width: glassSize.width,
    borderRadius: `${cornerRadius}px`,
    transform: baseStyle.transform,
    transition: baseStyle.transition,
    pointerEvents: 'none',
    mixBlendMode: 'overlay',
    padding: '1.5px',
    WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    boxShadow: '0 0 0 0.5px rgba(255, 255, 255, 0.5) inset, 0 1px 3px rgba(255, 255, 255, 0.25) inset, 0 1px 4px rgba(0, 0, 0, 0.35)',
    background: `linear-gradient(
          ${135 + resultMouseOffset.x * 1.2}deg,
          rgba(255, 255, 255, 0.0) 0%,
          rgba(255, 255, 255, ${0.32 + Math.abs(resultMouseOffset.x) * 0.008}) ${Math.max(10, 33 + resultMouseOffset.y * 0.3)}%,
          rgba(255, 255, 255, ${0.6 + Math.abs(resultMouseOffset.x) * 0.012}) ${Math.min(90, 66 + resultMouseOffset.y * 0.4)}%,
          rgba(255, 255, 255, 0.0) 100%
        )`,
  }"></span>
    <div v-if="Boolean(onClick)" :style="{
      ...positionStyles,
      height: glassSize.height,
      width: glassSize.width + 1,
      borderRadius: `${cornerRadius}px`,
      transform: baseStyle.transform,
      pointerEvents: 'none',
      transition: 'all 0.2s ease-out',
      opacity: isHovered || isActive ? 0.5 : 0,
      backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 50%)',
      mixBlendMode: 'overlay',
    }"></div>
    <div v-if="Boolean(onClick)" :style="{
      ...positionStyles,
      height: glassSize.height,
      width: glassSize.width + 1,
      borderRadius: `${cornerRadius}px`,
      transform: baseStyle.transform,
      pointerEvents: 'none', transition: 'all 0.2s ease-out',
      opacity: isActive ? 0.5 : 0,
      backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 80%)',
      mixBlendMode: 'overlay',
    }"></div>
    <div v-if="Boolean(onClick)" :style="{
      ...baseStyle,
      height: glassSize.height,
      width: glassSize.width + 1,
      borderRadius: `${cornerRadius}px`,
      position: baseStyle.position,
      top: baseStyle.top,
      left: baseStyle.left,
      pointerEvents: 'none', transition: 'all 0.2s ease-out',
      opacity: isHovered ? 0.4 : isActive ? 0.8 : 0,
      backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
      mixBlendMode: 'overlay',
    }"></div>
    </div>
</template>

<script>
  import GlassContainer from './glass-container.vue'
  export default {
    name: 'LiquidGlass',
    components: {
      GlassContainer
    },
    props: {
      displacementScale: {
        type: Number,
        default: 70
      },
      blurAmount: {
        type: Number,
        default: 0.0625
      },
      saturation: {
        type: Number,
        default: 140
      },
      aberrationIntensity: {
        type: Number,
        default: 2
      },
      elasticity: {
        type: Number,
        default: 0.15
      },
      cornerRadius: {
        type: Number,
        default: 999
      },
      globalMousePos: {x: Number, y: Number},
      mouseOffset: {x: Number, y: Number},
      mouseContainer: {
        type: [HTMLElement, null],
        default: null
      },
      mode: {
        type: String,
        default: 'standard'
      },
      onClick: Function,
      overLight: {
        type: Boolean,
        default: false
      },
      padding: {
        type: String,
        default: '24px 32px'
      },
      containerStyle: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      resultMousePos () {
        return this.globalMousePos || this.internalGlobalMousePos
      },
      resultMouseOffset () {
        return this.mouseOffset || this.internalMouseOffset
      },
      mouseDependencies () {
        return {
          mouseContainer: this.mouseContainer,
          externalGlobalMousePos: this.globalMousePos,
          externalMouseOffset: this.mouseOffset
        }
      },
      // useCallback转换过来的函数
      calculateDirectionalScale () {
        return () => {
          const glassRef = this.$refs['glassRef']
          if (!this.resultMousePos.x || !this.resultMousePos.y || !glassRef) {
            return 'scale(1)'
          }
          const rect = glassRef.$el.getBoundingClientRect()
          const pillCenterX = rect.left + rect.width / 2
          const pillCenterY = rect.top + rect.height / 2
          const pillWidth = this.glassSize.width
          const pillHeight = this.glassSize.height

          const deltaX = this.resultMousePos.x - pillCenterX
          const deltaY = this.resultMousePos.y - pillCenterY

          // Calculate distance from mouse to pill edges (not center)
          const edgeDistanceX = Math.max(0, Math.abs(deltaX) - pillWidth / 2)
          const edgeDistanceY = Math.max(0, Math.abs(deltaY) - pillHeight / 2)
          const edgeDistance = Math.sqrt(edgeDistanceX * edgeDistanceX + edgeDistanceY * edgeDistanceY)

          // Activation zone: 200px from edges
          const activationZone = 200

          // If outside activation zone, no effect
          if (edgeDistance > activationZone) {
            return 'scale(1)'
          }

          // Calculate fade-in factor (1 at edge, 0 at activation zone boundary)
          const fadeInFactor = 1 - edgeDistance / activationZone

          // Normalize the deltas for direction
          const centerDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
          if (centerDistance === 0) {
            return 'scale(1)'
          }

          const normalizedX = deltaX / centerDistance
          const normalizedY = deltaY / centerDistance

          // Calculate stretch factors with fade-in
          const stretchIntensity = Math.min(centerDistance / 300, 1) * this.elasticity * fadeInFactor

          // X-axis scaling: stretch horizontally when moving left/right, compress when moving up/down
          const scaleX = 1 + Math.abs(normalizedX) * stretchIntensity * 0.3 - Math.abs(normalizedY) * stretchIntensity * 0.15

          // Y-axis scaling: stretch vertically when moving up/down, compress when moving left/right
          const scaleY = 1 + Math.abs(normalizedY) * stretchIntensity * 0.3 - Math.abs(normalizedX) * stretchIntensity * 0.15

          return `scaleX(${Math.max(0.8, scaleX)}) scaleY(${Math.max(0.8, scaleY)})`
        }
      },
      calculateFadeInFactor () {
        return () => {
          const glassRef = this.$refs['glassRef']
          if (!this.resultMousePos.x || !this.resultMousePos.y || !glassRef) {
            return 0
          }

          const rect = glassRef.$el.getBoundingClientRect()
          const pillCenterX = rect.left + rect.width / 2
          const pillCenterY = rect.top + rect.height / 2
          const pillWidth = this.glassSize.width
          const pillHeight = this.glassSize.height

          const edgeDistanceX = Math.max(0, Math.abs(this.resultMousePos.x - pillCenterX) - pillWidth / 2)
          const edgeDistanceY = Math.max(0, Math.abs(this.resultMousePos.y - pillCenterY) - pillHeight / 2)
          const edgeDistance = Math.sqrt(edgeDistanceX * edgeDistanceX + edgeDistanceY * edgeDistanceY)

          const activationZone = 200
          return edgeDistance > activationZone ? 0 : 1 - edgeDistance / activationZone
        }
      },
      calculateElasticTranslation () {
        return () => {
          const glassRef = this.$refs['glassRef']
          if (!glassRef) {
            return {x: 0, y: 0}
          }

          const fadeInFactor = this.calculateFadeInFactor()
          const rect = glassRef.$el.getBoundingClientRect()
          const pillCenterX = rect.left + rect.width / 2
          const pillCenterY = rect.top + rect.height / 2

          return {
            x: (this.resultMousePos.x - pillCenterX) * this.elasticity * 0.1 * fadeInFactor,
            y: (this.resultMousePos.y - pillCenterY) * this.elasticity * 0.1 * fadeInFactor
          }
        }
      },
      transformStyle () {
        return `translate(calc(-50% + ${this.calculateElasticTranslation().x}px), calc(-50% + ${this.calculateElasticTranslation().y}px)) ${this.isActive && Boolean(this.onClick) ? 'scale(0.96)' : this.calculateDirectionalScale()}`
      },
      baseStyle () {
        return {
          ...this.containerStyle,
          transform: this.transformStyle,
          transition: 'all ease-out 0.2s'
        }
      },
      positionStyles () {
        return {
          position: this.baseStyle.position || 'relative',
          top: this.baseStyle.top || '50%',
          left: this.baseStyle.left || '50%'
        }
      }
    },
    data () {
      return {
        isHovered: false,
        isActive: false,
        glassSize: {width: 270, height: 69},
        internalGlobalMousePos: {x: 0, y: 0},
        internalMouseOffset: {x: 0, y: 0},
        cleanupMouseMove: null,
        cleanupResize: null
      }
    },
    watch: {
      mouseDependencies: {
        handler () {
          this.cleanMouseMoveEvent()
          if (this.externalGlobalMousePos && this.externalMouseOffset) {
            return
          }
          const container = this.mouseContainer || this.$refs['glassRef']
          if (!container) {
            return
          }
          container.addEventListener('mousemove', this.handleMouseMove)
          this.cleanupMouseMove = () => {
            container.removeEventListener('mousemove', this.handleMouseMove)
          }
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      handleMouseMove (e) {
        const container = this.mouseContainer || this.$refs['glassRef']
        if (!container) {
          return
        }
        const rect = container.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        this.internalMouseOffset = {
          x: ((e.clientX - centerX) / rect.width) * 100,
          y: ((e.clientY - centerY) / rect.height) * 100
        }
        this.internalGlobalMousePos = {
          x: e.clientX,
          y: e.clientY
        }
      },
      // 清理鼠标移动事件
      cleanMouseMoveEvent () {
        if (this.cleanupMouseMove) {
          this.cleanupMouseMove()
        }
      },
      clearResizeEvent () {
        if (this.cleanupResize) {
          this.cleanupResize()
        }
      }
    },
    mounted () {
      const updateGlassSize = () => {
        const glassRef = this.$refs['glassRef']
        if (glassRef) {
          const rect = glassRef.$el.getBoundingClientRect()
          this.glassSize = {width: rect.width, height: rect.height}
        }
      }

      updateGlassSize()
      window.addEventListener('resize', updateGlassSize)
      this.cleanupResize = () => window.removeEventListener('resize', updateGlassSize)
    },
    beforeDestroy () {
      this.cleanMouseMoveEvent()
      this.cleanupResize()
    }
  }
</script>

<style scoped>
  .liquid-glass-container {
    display: inline-block;
  }
  .liquid-glass-first, .liquid-glass-second {
    background: black;
    transition: all 150ms ease-in-out;
    pointer-events: none;
    opacity: 0;
  }
  .liquid-glass-first.liquid-glass-overlight {
    opacity: 0.2;
  }
  .liquid-glass-second {
    mix-blend-mode: overlay;
  }
  .liquid-glass-second.liquid-glass-overlight {
    opacity: 1;
  }

</style>
