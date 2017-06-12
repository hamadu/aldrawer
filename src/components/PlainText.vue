<template>
  <text
    :x="value.cx"
    :y="value.cy"
    :width="value.width"
    :height="value.height"
    v-bind:style="value.style"
    alignment-baseline="central"
    dominant-baseline="central">
    {{value.text}}
  </text>
</template>

<script>
export default {
  name: 'plain-text',
  props: ['value']
}
</script>
