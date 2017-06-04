<template>
  <svg :width="width" :height="height">
    <template v-for="value in objects">
      <PlainRect :value="value" v-if="value.type == 'rect'" />
      <PlainEllipse :value="value" v-if="value.type == 'ellipse'" />
      <PlainText :value="value" v-if="value.type == 'text'" />
      <PlainLine :value="value" v-if="value.type == 'line'" />
      <ConnectLine :value="value" v-if="value.type == 'connect-line'" />
    </template>
  </svg>
</template>

<script>
import PlainRect from '/src/components/PlainRect.vue'
import PlainEllipse from '/src/components/PlainEllipse.vue'
import PlainText from '/src/components/PlainText.vue'
import PlainLine from '/src/components/PlainLine.vue'
import ConnectLine from '/src/components/ConnectLine.vue'

export default {
  name: 'app',
  props: ['width', 'height', 'objects'],
  components: {
    PlainRect, PlainEllipse, PlainText, PlainLine, ConnectLine
  }
}
</script>
