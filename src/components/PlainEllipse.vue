<template>
  <ellipse
    :cx="value.x"
    :cy="value.y"
    :rx="value.r"
    :ry="value.r"
    v-bind:style="value.style">
  </ellipse>
</template>

<script>
export default {
  name: 'plain-ellipse',
  props: ['value']
}
</script>
