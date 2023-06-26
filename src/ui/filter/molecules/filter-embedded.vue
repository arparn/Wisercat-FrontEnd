<template>
  <div v-if="show" class="d-flex flex-column">
    <filter-content
        :filter-params="filterParams"
        :selected-filter="selectedFilter"
        :modal="false"
        @updateFilter="updateFilter"
        @deleteFilter="deleteFilter"
    />
    <div class="d-flex justify-content-center my-4">
      <b-row class="py-1 justify-content-center">
        <b-col>
          <b-button class="width-100" @click="hideFilter">CANCEL</b-button>
        </b-col>
        <b-col>
          <div :class="{ 'disabled': isSaveDisabled }">
            <b-button class="width-100" variant="primary" :disabled="isSaveDisabled" @click="save">SAVE</b-button>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import FilterContent from "./filter-content.vue";
import {BButton, BCol, BRow} from "bootstrap-vue-next";
export default {
  name: "filterEmbedded",
  components: {FilterContent, BRow, BCol, BButton},
  props: {
    filterParams: {
      type: Array,
      required: true,
    },
    selectedFilter: {
      type: Object,
      default: undefined,
    },
    showFilter: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    isSaveDisabled() {
      return !(this.filter && (this.filter.name &&
          this.filter.subFilters.length !== 0 &&
          !this.filter.subFilters.find((filter) => !filter.criteria || !filter.value)))
    }
  },
  data() {
    return {
      show: false,
      filter: undefined,
    }
  },
  watch: {
    showFilter: {
      handler() {
        this.show = this.showFilter
      }
    },
    show: {
      handler() {
        if (!this.show) {
          this.hideFilter()
        }
      }
    }
  },
  methods: {
    hideFilter() {
      this.$emit('hideFilter')
    },

    updateFilter(filter) {
      this.filter = filter
    },

    deleteFilter(id) {
      this.$emit('deleteFilter', id)
      this.hideFilter()
    },

    save() {
      this.$emit('saveFilter', this.filter)
      this.hideFilter()
    }
  }
}
</script>

<style scoped lang="postcss">
.width-100 {
  width: 100px;
}

.disabled {
  cursor: not-allowed;
}
</style>