<template>
  <b-container fluid class="filter-content">
    <b-row class="justify-content-center">
      <b-col lg="2" md="2" sm="2" cols="3">Filter name</b-col>
      <b-col>
        <b-form-input class="adjusted-w" v-model="filter.name" placeholder="My Filter 1" type="text"/>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col lg="2" md="2" sm="2" cols="3">
        <p class="mt-3 mb-0">Criteria</p>
      </b-col>
      <b-col>
        <b-row v-for="subFilter in filter.subFilters" class="pt-3">
          <b-col>
            <b-form-select class="adjusted-w" v-model="subFilter.key" :options="availableFilters" />
          </b-col>
          <b-col>
            <b-form-select class="adjusted-w" v-model="subFilter.criteria" :options="getCriteriaOptions(subFilter.key)" />
          </b-col>
          <b-col>
            <b-form-input class="adjusted-w" v-model="subFilter.value" />
          </b-col>
          <b-col v-if="showDeleteButton" lg="1" md="2" sm="2" cols="2">
            <div class="w-100 d-flex justify-content-center">
              <b-button variant="danger" @click="removeSubFilter(subFilter)">
                <i class="bi bi-trash" />
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="justify-content-center mt-3">
      <b-button class="w-auto" @click="addSubFilter">+ ADD ROW</b-button>
    </b-row>
  </b-container>
</template>

<script>
import {BButton, BCol, BRow, BContainer, BFormInput, BFormSelect} from "bootstrap-vue-next";
import {cloneDeep} from "lodash";

export default {
  name: "FilterContent",
  components: {BRow, BCol, BButton, BContainer, BFormInput, BFormSelect},
  props: {
    availableFilters: {
      type: Array,
      required: true,
    },
    existingFilter: {
      type: Object,
      default: undefined,
    },
    savedFilters: {
      type: Object,
      default: undefined,
    }
  },
  data() {
    return {
      newSubFilter: {
        key: this.availableFilters[0].value,
        criteria: undefined,
        value: undefined
      },
      filter: {
        name: undefined,
        subFilters: []
      }
    }
  },
  computed: {
    showDeleteButton() {
      return this.filter.subFilters.length > 1;
    }
  },
  watch: {
    // TODO add filter watcher to emit update event
  },
  beforeMount() {
    if (this.existingFilter) {
      this.filter = cloneDeep(this.existingFilter)
    } else {
      this.addSubFilter()
    }
  },
  methods: {
    addSubFilter() {
      console.log(this.filter)
      this.filter.subFilters.push(cloneDeep(this.newSubFilter))
    },

    removeSubFilter(filter) {
      this.filter.subFilters = this.filter.subFilters.filter((subFilter) => subFilter !== filter)
    },

    getCriteriaOptions(key) {
      if (this.availableFilters.length !== null) {
        let criteria = this.availableFilters.find((filter) => filter.value === key).criteria

        return Object.keys(criteria).map((type) => criteria[type])
      }

      return []
    },

    save() {
      // TODO
    }
  }
}
</script>

<style scoped lang="postcss">
.filter-content {
  padding-bottom: 16px;
  height: 16rem;
  overflow-y: auto;
  overflow-x: hidden;
}

.adjusted-w {
  min-width: 5rem;
  max-width: 12rem;
}
</style>