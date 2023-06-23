<template>
  <div class="d-flex flex-column align-self-start justify-content-start">
    <FilterModal :availableFilters="getFilters"/>
    <ExistingFilters />
  </div>
</template>

<script>
import {BButton} from "bootstrap-vue-next";
import ExistingFilters from "./existing-filters.vue";
import FilterModal from "../modals/filter-modal.vue";
import {FILTER_TYPE} from "../../../pages/people/people-constants.js";

export default {
  name: "Filter",
  components: {FilterModal, ExistingFilters, BButton},
  props: {},
  computed: {
    getFilters() {
      return Object.keys(FILTER_TYPE).map((type) => FILTER_TYPE[type])
    }
  },
  methods: {
    addFilter() {
      // TODO
    }
  }
}
</script>

<style scoped>

</style>