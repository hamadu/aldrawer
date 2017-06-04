<template>
  <text
    :x="value.x"
    :y="value.y"
    :width="value.width"
    :height="value.height"
    v-bind:style="value.style"
    text-anchor="middle"
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
