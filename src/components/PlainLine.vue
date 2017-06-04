<template>
  <line
    :x1="value.x1"
    :y1="value.y1"
    :x2="value.x2"
    :y2="value.y2"
    v-bind:style="value.style">
  </line>
</template>

<script>
export default {
  name: 'plain-line',
  props: ['value']
}
</script>
