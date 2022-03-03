import { mailService } from "../services/mail.service.js";



export default {
  // props: [""],
  template: `
        <section v-if="mail" class="">

        <div class="flex ">
      
            <div>
              <h1>{{ mail.subject }}</h1>
              <p> {{ mail.body }} </p>
            </div>

        </div>
        </section>
    `,
  data() {
    return {
      mail: null
    }
  },
  components: {},
  created() {
    const id = this.$route.params.emailId;
    mailService.get(id)
      .then(mail => this.mail = mail)
  },
  mount() {

  },
  methods: {},
  computed: {},
  watch: {},
  unmounted() {},
}