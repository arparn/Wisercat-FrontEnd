<template>
  <div class="d-flex flex-column justify-content-between">
    <Filter class="mb-4"/>
    <Table :items="getPeople.content" />
  </div>
</template>

<script>
import {BButton} from "bootstrap-vue-next";
import {createNamespacedHelpers} from "vuex";
import {FETCH_PEOPLE} from "./store/people.action-types";
import {Filter} from "../../ui/filter";
import {Table} from "../../ui/table";
import {SET_FILTER} from "./store/people.mutation-types";

const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers('filterModule')

export default {
  name: "PeoplePage",
  components: {Table, Filter, BButton},
  computed: {
    ...mapGetters({
      getPeople: 'getPeople'
    }),
  },
  beforeMount() {
    this.fetchPeople()
  },
  methods: {
    ...mapActions({
      fetchPeople: FETCH_PEOPLE
    }),
    ...mapMutations({
      setFilter: SET_FILTER
    }),

    async get() {
      await this.fetchPeople()
      console.log(this.$filters.formatDate(this.getPeople.content[0].birthDate))
    },
  }
}
</script>
