<template>
  <b-modal
      v-if="filterModal"
      v-model="filterModal"
      title="Filter"
      hide-footer
      size="lg"
  >
    <filter-content
        :filter-params="filterParams"
        :selected-filter="selectedFilter"
        @updateFilter="updateFilter"
        @deleteFilter="deleteFilter"
    />
    <div class="d-flex justify-content-center my-4">
      <b-row class="py-1 justify-content-center">
        <b-col>
          <b-button class="width-100" @click="hideModal">CLOSE</b-button>
        </b-col>
        <b-col>
          <b-button class="width-100" variant="primary" @click="save">SAVE</b-button>
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
    showModal: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      filterModal: false,
      filter: undefined,
    }
  },
  watch: {
    showModal: {
      handler() {
        this.filterModal = this.showModal
      }
    },
    filterModal: {
      handler() {
        if (!this.filterModal) {
          this.hideModal()
        }
      }
    }
  },
  methods: {
    hideModal() {
      this.$emit('hideModal')
    },

    updateFilter(filter) {
      this.filter = filter
    },

    deleteFilter(id) {
      this.$emit('deleteFilter', id)
      this.hideModal()
    },

    save() {
      this.$emit('saveFilter', this.filter)
      this.hideModal()
    }
  }
}
</script>

<style scoped lang="postcss">
.width-100 {
  width: 100px;
}
</style>