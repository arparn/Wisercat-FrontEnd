<template>
  <div class="d-flex flex-column align-self-start justify-content-start">
    <FilterModal :filterParams="filterParams" :saved-filters="existingFilters" />
    <ExistingFilters
        :filters="existingFilters"
        :selected-filter="getSelectedFilter()"
        @selectFilter="selectFilter" />
  </div>
</template>

<script>
import {BButton} from "bootstrap-vue-next";
import ExistingFilters from "./existing-filters.vue";
import FilterModal from "../modals/filter-modal.vue";

export default {
  name: "Filter",
  components: {FilterModal, ExistingFilters, BButton},
  props: {
    filterParams: {
      type: Array,
      required: true
    },
    existingFilters: {
      type: Array,
      default:[]
    }
  },
  data() {
    return {
      selectedFilter: undefined
    }
  },
  methods: {
    selectFilter(filter) {
      this.selectedFilter = filter
    },

    getSelectedFilter() { // TODO move to mixin
      return this.selectedFilter ? this.selectedFilter.name : undefined
    },

    addFilter() {
      // TODO
    }
  }
}
</script>
