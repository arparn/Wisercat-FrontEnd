<template>
  <div class="d-flex align-self-start justify-content-start">
    <div class="d-flex align-self-start">
      <b-button @click="get">Add Filter</b-button>
    </div>
    <AppliedFilters />
    <PeopleTable />
  </div>
</template>

<script>
import {BButton} from "bootstrap-vue-next";
import {createNamespacedHelpers} from "vuex";
import {FETCH_PEOPLE} from "./store/people.action-types";
import {AppliedFilters} from "../../ui/filter";
import {PeopleTable} from "./molecules";

const { mapActions, mapGetters } = createNamespacedHelpers('filterModule')

export default {
  name: "PeoplePage",
  components: {PeopleTable, AppliedFilters, BButton},
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