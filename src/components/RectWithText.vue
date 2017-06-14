<template>
  <g>
    <rect
      :x="object.x"
      :y="object.y"
      :width="object.w"
      :height="object.h"
      :style="object.style.shape">
    </rect>
    <text
      :x="object.x + object.w / 2"
      :y="object.y  + object.h / 2"
      :font-size="object.w / 2"
      :style="object.style.text">
      {{object.value}}
    </text>
  </g>
</template>

<script>
export default {
  name: 'app',
  props: ['object']
}
</script>

<style lang="scss" scoped>
</style>
