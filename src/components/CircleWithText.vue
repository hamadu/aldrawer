<template>
  <g>
    <ellipse
      :cx="object.x + object.w / 2"
      :cy="object.y + object.h / 2"
      :rx="object.w / 2"
      :ry="object.h / 2"
      :style="object.style.shape">
    </ellipse>
    <text
      :x="object.x + object.w / 2"
      :y="object.y  + object.h / 2"
      :font-size="object.w / 2"
      :style="object.style.text">
      {{object.text}}
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
