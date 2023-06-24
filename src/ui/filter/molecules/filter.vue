<template>
  <div class="d-flex flex-column align-self-start justify-content-start">
    <FilterModal :filterParams="filterParams" :saved-filters="existingFilters" :selected-filter="selectedFilter" />
    <ExistingFilters :filters="existingFilters" :selected-filter="selectedFilter.name" @selectFilter="selectFilter" />
  </div>
</template>

<script>
import {BButton} from "bootstrap-vue-next";
import ExistingFilters from "./existing-filters.vue";
import FilterModal from "../modals/filter-modal.vue";
import {FILTER_TYPE_PERSON} from "../../../pages/people/people-constants.js";

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

    addFilter() {
      // TODO
    }
  }
}
</script>

<style scoped>

</style>