<template>
  <div class="d-flex flex-column justify-content-between">
    <Filter class="mb-4"/>
    <Table
        :items="getItems"
        :pagination="getPagination"
        @pageChange="updatePagination"
    />
  </div>
</template>

<script>
import {BButton} from "bootstrap-vue-next";
import {createNamespacedHelpers} from "vuex";
import {FETCH_PEOPLE} from "./store/people.action-types";
import {Filter} from "../../ui/filter";
import {Table} from "../../ui/table";
import {SET_FILTER} from "./store/people.mutation-types";

const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers('filterModule')

export default {
  name: "PeoplePage",
  components: {Table, Filter, BButton},
  computed: {
    ...mapGetters({
      getPeople: 'getPeople',
      getFilter: 'getFilter'
    }),

    getPagination() {
      return {
        page: this.getFilter.page + 1,
        pageSize: this.getFilter.pageSize,
        totalItems: this.getPeople.totalElements
      }
    },

    getItems() {
      return this.getPeople.content ? this.getPeople.content.map((person) => { return {
        ...person,
        ...{birthDate: this.$filters.formatDate(person.birthDate)}
      }}) : []
    }
  },
  beforeMount() {
    this.fetchPeople()
  },
  methods: {
    ...mapActions({
      fetchPeople: FETCH_PEOPLE
    }),
    ...mapMutations({
      setFilter: SET_FILTER
    }),

    updatePagination(event) {
      this.setFilter({ filter: event })
    },

    async get() { // TODO remove
      console.log(this.getFilter)
      //await this.fetchPeople()
      //console.log(this.$filters.formatDate(this.getPeople.content[0].birthDate))
    },
  }
}
</script>
