import mailPreview from '../cmps/mail-preview.cmp.js'
import { mailService } from '../services/mail.service.js'

export default {
  props: ['mails'],
  template: `
      <table>

      <p>{{ showMsg }}</p>
   

        <tr v-bind:class="setClass(mail)" class="row flex" v-for="mail in mails" :key="mail.id">
 
        <div>
          <img @click="remove(mail.id)" class="delete-icon"  src="./css/apps/mail/icons/delete.svg" >
        </div>

       
         
          <mail-preview :mail="mail" ></mail-preview>
        </tr>
      </table>







    `,
  components: {
    mailPreview,
  },
  data() {
    return {
      setClass(mail) {
        return {
          read: mail.isRead,
          unread: !mail.isRead,
        }
      },
    }
  },
  methods: {
    remove(id) {
      this.$emit('remove', id)
    },
  },
  computed: {
    showMsg() {
      if (!this.mails.length) return 'No massage here.'
    },
  },
}
