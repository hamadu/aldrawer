<template>
  <text
    :x="value.x + value.width / 2"
    :y="value.y + value.height / 2"
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
