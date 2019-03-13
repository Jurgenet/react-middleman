<template>
  <div>
    <Baconizer/>
  </div>
</template>

<script>
import Vue from 'vue'
import Baconizer from 'baconizer'

export default {
  components: { Baconizer },

  props: ['message'],
}
</script>
