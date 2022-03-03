
import mailPreview from '../cmps/mail-preview.cmp.js'
import { mailService } from '../services/mail.service.js'

export default {
  props: ["mails"],
  template: `
      <section class="">

        <table class="">
        
          <tr v-bind:class="{read:mail.isRead, unread: !mail.isRead}" class="row" v-for="mail in mails" :key="mail.id">
            <mail-preview  :mail="mail" @click="setReaded(mail)"></mail-preview>
          </tr>
        
        </table>
  

      </section>
    `,
  components: {
    mailPreview,
  },
  created() {

  },
  mount() {

  },
  data() {
    return {
  

    }
  },
  methods: {
    setReaded(mail){
      mail.isRead = true
      mailService.save(mail)
      .then(updatedMail => console.log())
    }
  },
  computed: {
    
  },
  watch: {
    
  },
  unmounted() {

  },
}