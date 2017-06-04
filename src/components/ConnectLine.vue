<template>
  <line
    :x1="value.from.cx"
    :y1="value.from.cy"
    :x2="value.to.cx"
    :y2="value.to.cy"
    v-bind:style="value.style">
  </line>
</template>

<script>
export default {
  name: 'connect-line',
  props: ['value']
}
</script>
