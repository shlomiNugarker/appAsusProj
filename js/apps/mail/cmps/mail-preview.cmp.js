export default {
  props: ["mail"],
  template: `
        <section>
        <router-link :to="'/mailBox/'+mail.id">
          <div class="container-row">
              <span class="title"> {{ mail.subject }} </span>
              <span>{{ mail.body }}</span>  
          </div>
          </router-link>

        </section>

    `,
  components: {},
  created() {
  
  },
  mount() {
    // console.log(this.mail);
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  unmounted() {},
}