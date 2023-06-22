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
    <b-container fluid class="pb-3">
      <b-row class="justify-content-center">
        <b-col lg="2" md="2" sm="2" cols="3">Filter name</b-col>
        <b-col >
          <b-form-input class="min-w" v-model="filter.name" placeholder="My Filter 1" type="text"/>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col lg="2" md="2" sm="2" cols="3">
          <p class="mt-3 mb-0">Criteria</p>
        </b-col>
        <b-col>
          <b-row v-if="hasSubFilters" v-for="subFilter in filter.subFilters" class="pt-3">
            <b-col>
              <b-form-select class="min-w" v-model="subFilter.type" :options="availableFilters" />
            </b-col>
            <b-col>
              <b-form-select class="min-w" v-model="subFilter.criteria" :options="getCriteriaOptions" />
            </b-col>
            <b-col>
              <b-form-input class="min-w" v-model="subFilter.value" />
            </b-col>
            <b-col lg="1" md="2" sm="2" cols="2">
              <b-button variant="danger" @click="removeSubFilter(subFilter)">
                <i class="bi bi-trash"></i>
              </b-button>
            </b-col>
          </b-row>
          <b-row class="justify-content-center mt-3">
            <b-button class="w-auto" @click="addSubFilter">+ ADD ROW</b-button>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
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
import {BButton, BCol, BModal, BRow, BContainer, BFormInput, BFormSelect} from "bootstrap-vue-next";
import {cloneDeep} from "lodash";

export default {
  name: "FilterModal",
  components: {BRow, BCol, BButton, BModal, BContainer, BFormInput, BFormSelect},
  props: {
    availableFilters: {
      type: Array,
      required: true,
    },
    existingFilter: {
      type: Object,
      default: undefined,
    }
  },
  data() {
    return {
      filterModal: false,
      newSubFilter: {
        id: Math.random().toString(36),
        type: this.availableFilters[0].value,
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
    getCriteriaOptions() {
      if (this.availableFilters.length !== null) {
        let criteria = this.availableFilters.find((filter) => filter.value === this.newSubFilter.type).criteria

        return Object.keys(criteria).map((type) => criteria[type])
      }

      return []
    },

    hasSubFilters() {
      return this.filter.subFilters.length !== 0;
    },
  },
  beforeMount() {
    if (this.existingFilter) {
      this.filter = cloneDeep(this.existingFilter)
    } else {
      this.addSubFilter()
    }
  },
  methods: {
    showModal() {
      this.filterModal = true
    },

    hideModal() {
      this.filterModal = false
    },

    addSubFilter() {
      this.filter.subFilters.push(cloneDeep(this.newSubFilter))
    },

    removeSubFilter(filter) {
      this.filter.subFilters = this.filter.subFilters.filter((subFilter) => subFilter !== filter)
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

.min-w {
  min-width: 5rem;
}
</style>