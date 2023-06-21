<template>
  <div class="d-flex flex-column justify-content-between">
    <Filter class="mb-4"/>
    <b-button @click="get">GET</b-button>
    <PeopleTable />
  </div>
</template>

<script>
import {BButton} from "bootstrap-vue-next";
import {createNamespacedHelpers} from "vuex";
import {FETCH_PEOPLE} from "./store/people.action-types";
import {PeopleTable} from "./molecules";
import {Filter} from "../../ui/filter";

const { mapActions, mapGetters } = createNamespacedHelpers('filterModule')

export default {
  name: "PeoplePage",
  components: {Filter, PeopleTable, BButton},
  computed: {
    ...mapGetters({
      getPeople: 'getPeople'
    })
  },
  methods: {
    ...mapActions({
      fetchPeople: FETCH_PEOPLE
    }),

    async get() {
      if (this.getPeople.length === 0) {
       await this.fetchPeople()
      }
      console.log(this.$filters.formatDate(this.getPeople.content[0].birthDate))
    },
  }
}
</script>

<style scoped>

</style>