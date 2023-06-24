<template>
  <div class="d-flex align-self-start">
    <b-button @click="showModal">+ Add Filter</b-button>
  </div>
  <b-modal
      v-model="filterModal"
      title="Filter"
      hide-footer
      size="lg"
  >
    <filter-content
        :filter-params="filterParams"
        :selected-filter="selectedFilter"
        :saved-filters="savedFilters"
    />
    <div class="d-flex justify-content-center my-4">
      <b-row class="py-1 justify-content-center">
        <b-col>
          <b-button class="width-100" @click="hideModal">CLOSE</b-button>
        </b-col>
        <b-col>
          <b-button class="width-100" @click="save">SAVE</b-button>
        </b-col>
      </b-row>
    </div>
  </b-modal>
</template>

<script>
import {BButton, BCol, BModal, BRow} from "bootstrap-vue-next";
import FilterContent from "../molecules/filter-content.vue";

export default {
  name: "FilterModal",
  components: {FilterContent, BRow, BCol, BButton, BModal},
  props: {
    filterParams: {
      type: Array,
      required: true,
    },
    selectedFilter: {
      type: Object,
      default: undefined,
    },
    savedFilters: {
      type: Array,
      default: undefined,
    }
  },
  data() {
    return {
      filterModal: false,
    }
  },
  methods: {
    showModal() {
      this.filterModal = true
    },

    hideModal() {
      this.filterModal = false
    },

    save() {
      // TODO
    }
  }
}
</script>

<style scoped lang="postcss">
.width-100 {
  width: 100px;
}
</style>