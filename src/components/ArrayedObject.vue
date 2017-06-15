<template>
  <g>
    <template v-for="(_, index) in array.values">
      <RectWithText :object="array.getIndexElement(index)" v-if="array.options.index" />
      <RectWithText :object="array.getElement(index)" />
    </template>
  </g>
</template>

<script>
import RectWithText from '/src/components/RectWithText.vue'

export default {
  name: 'app',
  props: ['array'],
  components: {
    RectWithText
  }
}
</script>

<style lang="scss" scoped>
</style>
