<template>
  <line
    :x1="line.from.cx"
    :y1="line.from.cy"
    :x2="line.to.cx"
    :y2="line.to.cy"
    v-bind:style="line.style">
  </line>
</template>

<script>
export default {
  name: 'connect-line',
  props: ['line']
}
</script>
