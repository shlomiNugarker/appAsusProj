import longText from '../../../cmps/long-text.cmp.js'
import { mailService } from '../services/mail.service.js'
export default {
  props: ['mail'],
  template: `
  <section class=" row-preview">
    <div>

      
      <span @click="onClickStar" :class="getStar">
      <img class="star-icon" v-bind:src="getStar">
    </span>

    
      <div  class="link-row"  @click="setReaded(mail)">
        <span class="title">
          <span> {{ mail.subject }} </span>
        </span>
        
        <span>  
          {{ getShortTxt }}
        </span>
        
        
      </div>
    </div>
      
      <span>
        {{ getSentTime }}
      </span>
      
      
      <div v-if="isDetailsClick" class="page-container">
      
          <div>

              <div class="header-details">
                <h1> {{ mail.status }}: </h1>
              </div>

              <div class="time-details">
                <p> {{ getFromUserName }} </p>
                <p> {{ getSentTime }}</p>
              </div>

              <div class="details-msg">
                <h1>{{ mail.subject }}</h1>
              </div>
              
              <div class="body-msg">
                <p> {{ mail.body }} </p>
              </div>

         </div>
           <div>
             <button @click="isDetailsClick=false">Close</button> 
           </div>

        
      </div>
        
  
          
  </section>
    `,
  components: {
    longText,
  },
  data() {
    return {
      isDetailsClick: false,
      starSrc: {
        notYellow: 'css/apps/mail/icons/star.png',
        yellow: './css/apps/mail/icons/star-yellow.png',
      },
    }
  },
  methods: {
    setReaded(mail) {
      if (this.isDetailsClick) return
      mail.isRead = true
      mailService.save(mail)

      this.isDetailsClick = true
      console.log(this.isDetailsClick)
    },
    onClickStar() {
      this.mail.isStared = !this.mail.isStared
      mailService.save(this.mail)
      console.log(this.mail)
    },
  },
  computed: {
    getShortTxt() {
      if (this.mail.body.length < 50) return this.mail.body
      return this.mail.body.slice(0, 50) + '...'
    },
    getSentTime() {
      var sent = this.mail.sentAt
      var date = new Date(sent).toLocaleDateString()
      return date
    },
    getStar() {
      if (this.mail.isStared) return this.starSrc.yellow
      else if (!this.mail.isStared) return this.starSrc.notYellow
    },
    getSentTime() {
      var sent = this.mail.sentAt
      var date = new Date(sent).toLocaleDateString()
      return date
    },
    getFromUserName() {
      return this.mail.to
    },
  },
}
