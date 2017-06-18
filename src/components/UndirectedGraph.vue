<template>
  <g>
    <template v-for="e in graph.edgeElements">
      <ConnectLine :line="e" />
    </template>
    <template v-for="e in graph.vertexElements">
      <CircleWithText :object="e" />
    </template>
  </g>
</template>

<script>
import ConnectLine from '/src/components/ConnectLine.vue'
import CircleWithText from '/src/components/CircleWithText.vue'

export default {
  name: 'app',
  props: ['graph'],
  components: {
    ConnectLine, CircleWithText
  }
}
</script>

<style lang="scss" scoped>
</style>
