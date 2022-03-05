import {utilService} from '../../../services/util-service.js'
import { mailService } from '../services/mail.service.js'

export default {
  // props: [""],
  template: `
    <section>
      <div class="new-msg">

        <div class="title-mew-msg">
            <span>New Message</span>
            <span @click="close">Close</span>
        </div>

        <div class="input-to-msg">
          <input type="text" placeholder="To" v-model="newMsg.to">
        </div>

        <div class="input-subject-msg">
          <input type="text" ref="subject1" placeholder="Subject" v-model="newMsg.subject">
        </div>

        <div class="input-text-area">
          <textarea name="" id="" cols="30" rows="13" v-model="newMsg.body"></textarea>
        </div>

        <div class="send-container">
          <button @click="sendEmail">Send</button>
        </div>

      </div>
    </section>
    `,
  data() {
    return {
      mails: null,
      filterBy: null,
      user: null,
      // isNewMsg: false,
      sentMail: null,
      newMsg: {
        to: '',
        subject: '',
        body: '',
      }
    }
  },
  methods: {
    sendEmail(){
      var newMail = {
        // id : utilService.makeId(),
        to: this.newMsg.to,
        subject: this.newMsg.subject,
        body: this.newMsg.body,
        sentAt: new Date().getTime(),
        isRead: true,
        isStared: false,
        status: 'sent',
      }
      this.newMsg.to = ''
      this.newMsg.subject = ''
      this.newMsg.body = ''
      
      mailService.save(newMail)
      .then(mail => {
        this.sentMail = mail
      })

    },
    close(){
      this.$emit('close', false)
    }
  },

  watch: {
    sentMail:{
        handler() {
          this.$emit('addMail', this.sentMail)
      },
    }
  },
}