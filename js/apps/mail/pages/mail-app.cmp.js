import { mailService } from '../services/mail.service.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'


export default {
  // props: [""],
  template: `
    <section class="mail-app flex">
   
      <div class="side">
        
        <div class="main-menu">
          <p class="logo">Gmail</p>
        </div>

        <div class="compose">
          <p @click="clickCompose">Compose</p>
        </div>
      
        <p>email </p>
        <p>Inbox <span>{{ getUnreadCount }}</span></p>
        <p>starred</p>
        <p>sent mail</p>
        <p>Draft</p>     
         
      </div>

      <div class="middle">
        <div class="filter-container">
          <mail-filter @filtered="setFilter"></mail-filter>
        </div>
        <div>

        </div>
        <mail-list :mails="listToShow" @readed="setReaded(idx)"></mail-list>
      </div>


      <div class="l-side">
        
      </div>

      <div v-if="isNewMsg" class="new-msg">

        <div class="title-mew-msg">
            <span>New Message</span>
            <span @click="isNewMsg=!isNewMsg">Close</span>
        </div>

        <div class="input-to-msg">
          <input type="text" placeholder="To">
        </div>

        <div class="input-subject-msg">
          <input type="text" ref="subject" placeholder="Subject">
        </div>

        <div class="input-text-area">
          <textarea name="" id="" cols="30" rows="20"></textarea>
          
        </div>
        
      </div>

    </section> 
    `,
  components: {
    mailList,
    mailFilter
  },
  created() {
    mailService.query()
    .then(mails => this.mails = mails)
    console.log( mailService.getLoggedinUser());
    this.user = mailService.getLoggedinUser()
   
  },

  mount() {},
  data() {
    return {
      mails: null,
      filterBy: null,
      user: null,
      isNewMsg: false,

    }
  },
  methods: {
    setFilter(filterBy){
      this.filterBy = filterBy
    },
    clickCompose(){
      this.isNewMsg = !this.isNewMsg
      console.log(this.$refs.subject);
      
    }

 
  },
  computed: {
    // mail
    listToShow(){
      if(!this.filterBy) return this.mails
      const regex = new RegExp(this.filterBy.search, 'i');
      return this.mails.filter(mail =>{
        return regex.test(mail.subject)
        //  &&  this.filterBy.
       
      })
    },
    getUnreadCount(){
      if(!this.mails) return
      var unreadCount = 0
      this.mails.forEach(mail => {
        if(!mail.isRead) unreadCount++
      })
      console.log(unreadCount);
      return unreadCount 
    }
  },
  watch: {},
  unmounted() {},
}