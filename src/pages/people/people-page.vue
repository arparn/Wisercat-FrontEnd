<template>
  <div class="d-flex flex-column justify-content-between">
    <Filter
        :filter-params="getFilterParams"
        :existing-filters="getExistingFilters"
        class="mb-4"
        @saveFilter="save"
        @deleteFilter="removeFilter"
        @applyFilter="applyFilter"
    />
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
import {DELETE_FILTER, FETCH_PEOPLE, FETCH_PEOPLE_FILTERS, SAVE_FILTER} from "./store/people.action-types";
import {Filter} from "../../ui/filter";
import {Table} from "../../ui/table";
import {SET_FILTER} from "./store/people.mutation-types";
import {FILTER_TYPE_PERSON} from "./people-constants";
import {FILTER_TYPE} from "../../../constants";

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
      fetchPeopleFilters: FETCH_PEOPLE_FILTERS,
      saveFilter: SAVE_FILTER,
      deleteFilter: DELETE_FILTER,
    }),
    ...mapMutations({
      setFilter: SET_FILTER
    }),

    get(subFilters, key) {
      return subFilters.map((filter) => filter[key])
    },

    async setSubFilters(filter) {
      await this.setFilter({
        filter: {
          keys: filter ? this.get(filter.subFilters, 'key') : [],
          criteria: filter ? this.get(filter.subFilters, 'criteria') : [],
          values: filter ? this.get(filter.subFilters, 'value') : [],
          page: 0
        }
      })
    },

    async updatePagination(event) {
      await this.setFilter({ filter: event })
      this.fetchPeople()
    },

    async save(filter) {
      await this.setSubFilters(filter)
      this.saveFilter({...filter, filterType: FILTER_TYPE.PERSON})
    },

    removeFilter(id) {
      this.deleteFilter({id})
    },

    async applyFilter(filter) {
      await this.setSubFilters(filter)
      this.fetchPeople()
    }
  }
}
</script>
