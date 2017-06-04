<template>
  <g>
    <template v-for="(value, index) in values">
      <rect class="box"
        :x="left + width * index"
        :y="top"
        :width="width"
        :height="height" >
      </rect>
      <text
        :x="left + width * index + width / 2"
        :y="top + height / 2"
        :font-size="width / 2"
        text-anchor="middle">
        {{value}}
      </text>
    </template>
  </g>
</template>

<script>
export default {
  name: 'app',
  props: ['width', 'height', 'left', 'top', 'values'],
  data: () => {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  stroke: #000;
  stroke-width: 2;
  fill: #fff;
}
</style>
