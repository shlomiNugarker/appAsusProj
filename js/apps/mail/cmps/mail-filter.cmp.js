export default {
  // props: [""],
  template: `
        <section>
          <div class="main-filter">
            
            <input type="text" placeholder="search mail">
          </div>
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
  methods: {},
  computed: {},
  watch: {},
  unmounted() {},
}