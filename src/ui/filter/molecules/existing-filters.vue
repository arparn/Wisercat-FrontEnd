<template>
  <b-form-group v-if="hasExistingFilters" label="Saved filters" v-slot="{ savedFilters }">
    <b-form-radio-group
        v-model="filter"
        :options="getFilters"
        :aria-describedby="savedFilters"
        name="saved-filters"
        @click="handleClick"
    />
  </b-form-group>
</template>

<script>
import {BFormGroup, BFormRadioGroup} from "bootstrap-vue-next";
import {cloneDeep} from "lodash";

export default {
  name: "ExistingFilters",
  components: {BFormRadioGroup, BFormGroup},
  props: {
    selectedFilter: {
      type: String,
      default: undefined,
    },
    filters: {
      type: Array,
      default: [],
    }
  },
  computed: {
    hasExistingFilters() {
      return this.filters.length !== 0
    },

    getFilters() {
      return this.filters.map((filter) => {
        return {value: filter.name, text: filter.name}
      })
    },

    getSelectedFilter() {
      return this.filters.find((filter) => filter.name === this.filter)
    }
  },
  data() {
    return {
      filter: undefined
    }
  },
  watch: {
    filter: {
      handler() {
        this.selectFilter()
      }
    }
  },
  beforeMount() {
    if (this.selectedFilter) {
      this.filter = cloneDeep(this.selectedFilter)
    }
  },
  methods: {
    handleClick() {
      if (this.filter) {
        this.filter = undefined
      }
    },

    selectFilter() {
      this.$emit('selectFilter', this.getSelectedFilter)
    }
  }
}
</script>
