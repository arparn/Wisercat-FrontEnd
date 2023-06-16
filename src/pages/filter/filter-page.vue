<template>
  <div>
    <p>Hello World! {{getPerson}}</p>
    <b-button @click="get">Button</b-button>
  </div>
</template>

<script>
import {BButton} from "bootstrap-vue-next";
import {createNamespacedHelpers} from "vuex";
import {FETCH_PERSON} from "./store/filter.action-types";

const { mapActions, mapGetters } = createNamespacedHelpers('filterModule')

export default {
  name: "FilterPage",
  components: {BButton},
  computed: {
    ...mapGetters({
      getPerson: 'getPerson'
    })
  },
  methods: {
    ...mapActions({
      fetchPerson:FETCH_PERSON
    }),

    get() {
      if (this.getPerson == null) {
        this.fetchPerson()
      }
      console.log(this.getPerson)
    }
  }
}
</script>

<style scoped>

</style>