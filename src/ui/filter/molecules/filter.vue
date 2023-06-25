<template>
  <div class="d-flex flex-column align-self-start">
    <div class="d-flex justify-content-start mb-4">
      <b-row class="justify-content-center">
        <b-col class="px-2">
          <b-button class="width-120" @click="showModal(true)">+ Add Filter</b-button>
        </b-col>
        <b-col class="px-2">
          <b-button v-if="canEditFilter" class="width-120" @click="showModal(false)">Edit Filter</b-button>
        </b-col>
      </b-row>
    </div>
    <ExistingFilters
        :filters="existingFilters"
        :selected-filter="getSelectedFilter()"
        @selectFilter="selectFilter"
    />
    <FilterModal
        :filterParams="filterParams"
        :selected-filter="selectedFilter"
        :showModal="filterModal"
        @hideModal="hideModal"
        @saveFilter="saveFilter"
        @deleteFilter="deleteFilter"
    />
  </div>
</template>

<script>
import {BButton, BRow, BCol} from "bootstrap-vue-next";
import ExistingFilters from "./existing-filters.vue";
import FilterModal from "../modals/filter-modal.vue";

export default {
  name: "Filter",
  components: {FilterModal, ExistingFilters, BButton, BRow, BCol},
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
  computed: {
    canEditFilter() {
      return this.selectedFilter
    }
  },
  data() {
    return {
      selectedFilter: undefined,
      filterModal: false,
    }
  },
  methods: {
    selectFilter(filter) {
      this.selectedFilter = filter
      this.applyFilter()
    },

    getSelectedFilter() {
      return this.selectedFilter ? this.selectedFilter.name : undefined
    },

    showModal(isNewFilter) {
      if (isNewFilter) {
        this.selectedFilter = undefined
      }
      this.filterModal = true
    },

    hideModal() {
      this.filterModal = false
    },

    saveFilter(filter) {
      this.selectedFilter = filter
      this.$emit('saveFilter', filter)
    },

    deleteFilter(id) {
      this.selectedFilter = undefined
      this.$emit('deleteFilter', id)
    },

    applyFilter() {
      this.$emit('applyFilter', this.selectedFilter)
    }
  }
}
</script>
<style scoped lang="postcss">
.width-120 {
  width: 120px;
}
</style>
