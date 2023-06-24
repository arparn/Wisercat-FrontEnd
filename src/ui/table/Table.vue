<template>
  <div>
    <b-table
        id="table"
        striped
        :items="items"
    />
    <div v-if="pagination && items.length !== 0" class="d-flex justify-content-center">
      <b-pagination
          v-model="page"
          :total-rows="pagination.totalItems"
          :per-page="getPageSize"
          aria-controls="table"
      />
    </div>
  </div>
</template>

<script>
import {BPagination, BTable, BButton} from "bootstrap-vue-next";

export default {
  name: "Table",
  components: {BPagination, BTable, BButton},
  props: {
    items: {
      type: Array,
      default: []
    },
    pagination: {
      deep: true,
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      page: 0,
    }
  },
  watch: {
    page: {
      handler() {
        this.changePage()
      }
    }
  },
  beforeMount() {
    this.page = this.pagination.page
  },
  computed: {
    getPageSize() {
      return this.pagination ? this.pagination.pageSize : undefined
    }
  },
  methods: {
    changePage() {
      this.$emit('pageChange', { page: this.page })
    }
  }
}
</script>