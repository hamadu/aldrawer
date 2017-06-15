<template>
  <svg :width="width" :height="height">
    <template v-for="value in objects">
      <ConnectLine :line="value" v-if="value.type == 'connect-line'" />
    </template>

    <template v-for="value in objects">
      <PlainLine      :line="value"   v-if="value.type == 'line'" />
      <RectWithText   :object="value" v-if="value.type == 'rect'" />
      <CircleWithText :object="value" v-if="value.type == 'circle'" />
      <ArrayedObject  :array="value"  v-if="value.type == 'arrayedObject'" />
      <TabularObject  :table="value"  v-if="value.type == 'tabularObject'" />
    </template>
  </svg>
</template>

<script>
import PlainLine from '/src/components/PlainLine.vue'
import ConnectLine from '/src/components/ConnectLine.vue'

import RectWithText from '/src/components/RectWithText.vue'
import CircleWithText from '/src/components/CircleWithText.vue'
import ArrayedObject from '/src/components/ArrayedObject.vue'
import TabularObject from '/src/components/TabularObject.vue'

export default {
  name: 'app',
  props: ['width', 'height', 'objects'],
  components: {
    ArrayedObject, TabularObject, RectWithText, CircleWithText, PlainLine, ConnectLine
  }
}
</script>
