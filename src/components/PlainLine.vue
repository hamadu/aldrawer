<template>
  <line
    :x1="line.x1"
    :y1="line.y1"
    :x2="line.x2"
    :y2="line.y2"
    v-bind:style="line.style">
  </line>
</template>

<script>
export default {
  name: 'plain-line',
  props: ['line']
}
</script>
