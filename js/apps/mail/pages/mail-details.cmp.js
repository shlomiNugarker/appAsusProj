import { mailService } from "../services/mail.service.js";



export default {
  // props: [""],
  template: `
        <section class="t">
            <h1>{{ mail.subject }}</h1>
            <p></p>
        </section>
    `,
  data() {
    return {
      mail: null
    }
  },
  components: {},
  created() {
    console.log('created');
    console.log(this.$route.params);
    const id = this.$route.params.emailId;
    console.log(id);
    mailService.get(id)
      .then(mail => this.mail = mail)
      console.log('mailId', id);
  },
  mount() {},
  methods: {},
  computed: {},
  watch: {},
  unmounted() {},
}