<template>
  <div class="w-72 text-white text-shadow-lg">
    <h3 class="text-xl font-semibold mb-4">User Information</h3>
    <div class="space-y-3">
      <div class="flex items-center space-x-3">
        <div
          class="w-12 h-12 bg-black/10 backdrop-blur rounded-full flex items-center justify-center text-white font-semibold">
          John
        </div>
        <div>
          <p class="font-medium">John</p>
          <p class="text-sm text-white/80">Software Engineer</p>
        </div>
      </div>
      <div class="pt-2 space-y-2">
        <div class="flex justify-between">
          <span class="text-sm text-white/80">Email:</span>
          <span class="text-sm">john@example.com</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-white/80">Location:</span>
          <span class="text-sm">Wanderland, Earth</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-white/80">Join Date:</span>
          <span class="text-sm">March 2023</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Card'
  }
</script>
<style scoped>
</style>
