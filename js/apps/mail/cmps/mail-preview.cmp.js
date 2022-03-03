export default {
  props: ["mail"],
  template: `
        <section class="">
        <router-link :to="'/mailBox/'+mail.id" class="link-row">
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