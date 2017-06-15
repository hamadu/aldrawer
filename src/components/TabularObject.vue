<template>
  <g>
    <template v-for="(row, rowIndex) in table.values">
      <RectWithText :object="table.getRowIndexElement(rowIndex)" v-if="table.options.index" />
      <template v-for="(_, colIndex) in row">
        <RectWithText :object="table.getColIndexElement(colIndex)" v-if="table.options.index && rowIndex === 0" />
        <RectWithText :object="table.getElement(rowIndex, colIndex)" />
      </template>
    </template>
  </g>
</template>

<script>
import RectWithText from '/src/components/RectWithText.vue'

export default {
  name: 'app',
  props: ['table'],
  components: {
    RectWithText
  }
}
</script>

<style lang="scss" scoped>
</style>
