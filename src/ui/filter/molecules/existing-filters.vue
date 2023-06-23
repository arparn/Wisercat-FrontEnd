<template>
  <b-form-group v-if="hasExistingFilters" label="Saved filters" v-slot="{ savedFilters }">
    <b-form-radio-group
        v-model="filter"
        :options="filters"
        :aria-describedby="savedFilters"
        name="saved-filters"
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
    }
  },
  data() {
    return {
      filter: undefined
    }
  },
  beforeMount() {
    if (this.selectedFilter) {
      this.filter = cloneDeep(this.selectedFilter)
    }
  }
}
</script>
