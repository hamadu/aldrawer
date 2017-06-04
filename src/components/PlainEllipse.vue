<template>
  <ellipse
    :cx="value.cx"
    :cy="value.cy"
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
