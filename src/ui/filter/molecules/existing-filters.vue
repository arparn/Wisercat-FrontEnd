<template>
  <b-form-group label="Saved filters" v-slot="{ savedFilters }">
    <b-form-radio-group
        v-model="filter"
        :aria-describedby="savedFilters"
        name="saved-filters"
    >
      <b-form-radio v-for="filter in filters" :value="filter.name" @click="handleClick(filter.name)">{{filter.name}}</b-form-radio>
    </b-form-radio-group>
  </b-form-group>
</template>

<script>
import {BFormGroup, BFormRadio, BFormRadioGroup} from "bootstrap-vue-next";

export default {
  name: "ExistingFilters",
  components: {BFormRadio, BFormRadioGroup, BFormGroup},
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
    selectedFilter: {
      deep: true,
      handler() {
        this.filter = this.selectedFilter
      }
    },
    filter: {
      handler() {
        this.selectFilter()
      }
    }
  },
  methods: {
    handleClick(filter) {
      if (this.filter === filter) {
        this.filter = undefined
      } else {
        this.filter = filter
      }
    },

    selectFilter() {
      this.$emit('selectFilter', this.getSelectedFilter)
    }

  }
}
</script>
