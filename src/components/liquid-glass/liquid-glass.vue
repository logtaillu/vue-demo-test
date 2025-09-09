<template>
  <button @click="click">{{ msg }}</button>
</template>

<script>
export default {
  name: 'LiquidGlass',
  props: {
    msg: {
      type: String,
      default: 'Liquid Glass'
    }
  },
  computed: {
  },
  data() {
    return {

    }
  },
  methods: {
    click() {
      console.log('clicked')
    }
  },
  mounted() {
    console.log('mounted')
  }
}
</script>

<style lang="stylus" scoped>
  button
    padding: 10px 20px
    border-radius: 5px
    border: none
    background-color: #42b983
    color: #fff
    font-size: 16px
    cursor: pointer
</style>
