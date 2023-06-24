<template>
  <div class="d-flex flex-column justify-content-between">
    <Filter :filter-params="getFilterParams" :existing-filters="getExistingFilters" class="mb-4"/>
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
import {FETCH_PEOPLE, FETCH_PEOPLE_FILTERS} from "./store/people.action-types";
import {Filter} from "../../ui/filter";
import {Table} from "../../ui/table";
import {SET_FILTER} from "./store/people.mutation-types";
import {FILTER_TYPE_PERSON} from "./people-constants";

const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers('filterModule')

export default {
  name: "PeoplePage",
  components: {Table, Filter, BButton},
  computed: {
    ...mapGetters({
      getPeople: 'getPeople',
      getFilter: 'getFilter',
      getExistingFilters: 'getExistingFilters'
    }),

    getFilterParams() {
      return Object.keys(FILTER_TYPE_PERSON).map((type) => FILTER_TYPE_PERSON[type])
    },

    getPagination() {
      return {
        page: this.getFilter.page + 1,
        pageSize: this.getFilter.pageSize,
        totalItems: this.getPeople.totalElements
      }
    },

    getItems() {
      return this.getPeople.content ? this.getPeople.content.map((person) => {
        return {
          ...person,
          ...{birthDate: this.$filters.formatDate(person.birthDate)}
        }
      }) : []
    }
  },
  beforeMount() {
    this.fetchPeople()
    this.fetchPeopleFilters()
  },
  methods: {
    ...mapActions({
      fetchPeople: FETCH_PEOPLE,
      fetchPeopleFilters: FETCH_PEOPLE_FILTERS
    }),
    ...mapMutations({
      setFilter: SET_FILTER
    }),

    updatePagination(event) {
      this.setFilter({ filter: event })
    }
  }
}
</script>
