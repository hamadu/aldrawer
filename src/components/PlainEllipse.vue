<template>
  <ellipse
    :cx="value.cx"
    :cy="value.cy"
    :rx="value.rx"
    :ry="value.ry"
    v-bind:style="value.style">
  </ellipse>
</template>

<script>
export default {
  name: 'plain-ellipse',
  props: ['value']
}
</script>
