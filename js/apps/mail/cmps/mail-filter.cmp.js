export default {
  // props: [""],
  template: `
        <section class="">
            <input type="text" placeholder="search mail" @input="setFilter" v-model="filterBy.search">
        </section>
    `,
  components: {},
  created() {},
  mount() {},
  data() {
    return {
      filterBy: {
        search: null,
        read: null,
        sent: null,
        unread: null,
        date: null,
        title: null,
      }
    }
  },
  methods: {
    setFilter(){
      console.log(this.filterBy.search);
      this.$emit('filtered', this.filterBy)
    }
  },
  computed: {},
  watch: {},
  unmounted() {},
}