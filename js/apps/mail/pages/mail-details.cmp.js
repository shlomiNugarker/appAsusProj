import { mailService } from "../services/mail.service.js";



export default {
  // props: [""],
  template: `
        <section>
            <h1>mail details</h1>
            <p>{{ mail }}</p>
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
    const id = this.$route.params.mailId;
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