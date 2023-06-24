<template>
  <div>
    <b-table
        id="table"
        striped
        :items="items"
        :per-page="getPageSize"
        :current-page="getPage"
    />
    <div v-if="pagination" class="d-flex justify-content-center">
      <b-pagination
          v-model="getPage"
          :total-rows="pagination.totalItems"
          :per-page="getPageSize"
          aria-controls="table"
      />
    </div>
  </div>
</template>

<script>
import {BPagination, BTable} from "bootstrap-vue-next";

export default {
  name: "Table",
  components: {BPagination, BTable},
  props: {
    items: {
      type: Array,
      default: []
    },
    pagination: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    getPageSize() {
      return this.pagination ? this.pagination.pageSize : null
    },

    getPage() {
      return this.pagination ? this.pagination.page : null
    }
  }
}
</script>