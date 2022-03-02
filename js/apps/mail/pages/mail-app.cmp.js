import { mailService } from '../services/mail.service.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'


export default {
  // props: [""],
  template: `
        <section>
            <h1>mail index box</h1>
            <mail-filter></mail-filter>
            <mail-list :mails="listToShow"></mail-list>
            {{ mails }}
        </section>
    `,
  components: {
    mailList,
    mailFilter
  },
  created() {
    mailService.query()
    .then(mails => this.mails = mails)
  },
  mount() {},
  data() {
    return {
      mails: null,
      filterBy: null,
      
    }
  },
  methods: {},
  computed: {
    // mail
    listToShow(){
      if(!this.filterBy) return this.mails
    }
  },
  watch: {},
  unmounted() {},
}