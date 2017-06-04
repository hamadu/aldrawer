<template>
  <rect
    :x="value.x"
    :y="value.y"
    :width="value.width"
    :height="value.height"
    v-bind:style="value.style">
  </rect>
</template>

<script>
export default {
  name: 'plain-rect',
  props: ['value']
}
</script>
