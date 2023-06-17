<template>
  <div>
    <p>Hello World!</p>
    <b-button @click="get">Button</b-button>
  </div>
</template>

<script>
import {BButton} from "bootstrap-vue-next";
import {createNamespacedHelpers} from "vuex";
import {FETCH_PEOPLE} from "./store/people.action-types";

const { mapActions, mapGetters } = createNamespacedHelpers('filterModule')

export default {
  name: "FilterPage",
  components: {BButton},
  computed: {
    ...mapGetters({
      getPeople: 'getPeople'
    })
  },
  methods: {
    ...mapActions({
      fetchPeople: FETCH_PEOPLE
    }),

    get() {
      if (this.getPeople == null) {
        this.fetchPeople()
      }
      console.log(this.getPeople)
    }
  }
}
</script>

<style scoped>

</style>