<template>
  <div class="d-flex align-self-start">
    <b-button @click="showModal">+ Add Filter</b-button>
  </div>
  <b-modal
      v-model="filterModal"
      title="Filter"
      hide-footer
  >
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col lg="3" md="2">Filter name</b-col>
        <b-col >
          <b-form-input v-model="filter.name" placeholder="My Filter 1" type="text"/>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col lg="3" md="2">Criteria</b-col>
        <b-col>
          <b-row>
            <b-col>
              <b-form-select v-model="newSubFilter.type" :options="filters" />
            </b-col>
            <b-col>
              <b-form-select v-model="newSubFilter.criteria" :options="getCriteriaOptions"/>
            </b-col>
            <b-col>
              <b-form-input v-model="newSubFilter.value" />
            </b-col>
          </b-row>
          <b-row v-if="hasSubFilters" v-for="subFilter in filter.subFilters">
            <b-col></b-col>
            <b-col></b-col>
            <b-col></b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <div class="d-flex justify-content-center mt-4">
      <b-row>
        <b-col class="my-1">
          <b-button class="width-100" @click="hideModal">CLOSE</b-button>
        </b-col>
        <b-col class="my-1">
          <b-button class="width-100" @click="save">SAVE</b-button>
        </b-col>
      </b-row>
    </div>
  </b-modal>
</template>

<script>
import {BButton, BCol, BModal, BRow, BContainer, BFormInput, BFormSelect} from "bootstrap-vue-next";

export default {
  name: "FilterModal",
  components: {BRow, BCol, BButton, BModal, BContainer, BFormInput, BFormSelect},
  props: {
    filters: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      filterModal: false,
      newSubFilter: {
        type: undefined,
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
      if (this.filters.length !== null) {
        let criteria = this.filters.find((filter) => filter.value === this.newSubFilter.type).criteria

        return Object.keys(criteria).map((type) => criteria[type])
      }

      return []
    },

    hasSubFilters() {
      return this.filter.subFilters.length !== 0;
    }
  },
  beforeMount() {
    this.newSubFilter.type = this.filters[0].value
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

<style scoped>
.width-100 {
  width: 100px;
}
</style>