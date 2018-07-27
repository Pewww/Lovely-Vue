<template>
  <div>
    <button v-for="(region, index) in regions" :key="index" @click="changeRegion({ region: region })">
      {{ region }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Constant from '../../Constant'
import _ from 'lodash'

export default {
  name: 'region-buttons',
  computed: mapGetters([
    'regions'
  ]),
  methods: {
    ...mapMutations([
      Constant.CHANGE_REGION
    ])
  }
  /*
  다음과 같음.
  methods: {
    changeRegion (val) {
      this.$store.commit(Constant.CHANGE_REGION, val);
    }
  }
  */
}
</script>

<style>
</style>
