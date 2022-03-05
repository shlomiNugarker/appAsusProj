import { mailService } from '../services/mail.service.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'
import {utilService} from '../../../services/util-service.js'
import mailFolderList from '../cmps/mail-folder-list.js'
import mailCompous from '../cmps/mail-compous.cmp.js'

export default {
  template: `
    <section class="mail-app" >

    <div class="left-side">
      <mail-folder-list :mails="mails" :folderType="currFolder" @select="clickCompose" @folderSelected="folderSelected"/>
    </div>

      <div class="middle">
        <mail-filter @filtered="setFilter" :folderType="currFolder"/>

        <mail-list :mails="mailsToShow" @readed="setReaded(idx)" @remove="removeMail"/>
      </div> 

      <div class="right-side">
       
      </div>

      <mail-compous v-if="isNewMsg" @close="close" @addMail="addMail"></mail-compous>
    </section> 
  `,
  components: {
    mailList,
    mailFilter,
    mailFolderList,
    mailCompous
  },
  created() {
    mailService.query()
      .then(mails => this.mails = mails)
      this.user = mailService.getLoggedinUser()
  },
  data() {
    return {
      mails: null,
      filterBy: {
        isRead: 'all',
        txt: '',
        sortType: 'date',
        sortAt: true,
        sortTxt: false,
      },
      user: null,
      isNewMsg: false,
      currFolder: 'inbox',
      mailsByFolder: null,

      newMsg: {
        to: '',
        subject: '',
        body: '',
      }
    }
  },
  methods: {
    removeMail(id){
      var isTrash = this.mails.find(mail=>{
        return mail.id === id
      })
      if(isTrash.status !== 'trash'){
        isTrash.status = 'trash'
        mailService.save(isTrash)
        return
      }
      else {
        mailService.remove(id)
          .then(()=>{
            const idx = this.mails.findIndex((mail) => mail.id === id);
            this.mails.splice(idx, 1);
          })
          .catch(err=>{
            console.log(err,'error on splice mail');
          })
      }

    },
    setFilter(filterBy){
      this.filterBy = filterBy
    },
    clickCompose(){
      this.isNewMsg = !this.isNewMsg
    },
    folderSelected(str){
      this.currFolder = str
    },

    close(){
      this.isNewMsg = false
    },
    addMail(mail){
      this.mails.push(mail)
      this.isNewMsg = false
    },
  },
  computed: {
    mailsToShow(){
      if(!this.mails) return
      var mailsToReturn = this.mails.filter(mail =>  {
        const regex = new RegExp(this.filterBy?.txt, 'i');
        return mail.status === this.currFolder && regex.test(mail.subject) 
      })

      if(this.filterBy.sortType === 'date') {
        if(this.filterBy.sortAt) {
          this.filterBy.sortTxt = false
          mailsToReturn.sort((mailA, mailB) => mailB.sentAt - mailA.sentAt)
        } 
        else if(!this.filterBy.sortAt){
          this.filterBy.sortTxt = false
          mailsToReturn.sort((mailA, mailB) => mailA.sentAt - mailB.sentAt)
        } 
      }

      else if(this.filterBy.sortType === 'subject'){
        if(this.filterBy.sortTxt){
          mailsToReturn.sort((mailA, mailB) => mailA.subject.localeCompare(mailB.subject))
        }
        else if(!this.filterBy.sortTxt){
          mailsToReturn.sort((mailA, mailB) => mailB.subject.localeCompare(mailA.subject))
        }
      }
      
      if(this.filterBy.isRead === 'all') return mailsToReturn
      else if(this.filterBy.isRead === 'read') return mailsToReturn.filter(mail => mail.isRead === true)
      else if(this.filterBy.isRead === 'unread') return mailsToReturn.filter(mail => mail.isRead === false)
    },
    getUnreadCount(){
      if(!this.mails) return
      var unreadCount = 0
      this.mails.forEach(mail => {
        if(!mail.isRead) unreadCount++
      })
      return unreadCount 
    }
  },
  watch: {
    mails:{
      handler() {
        console.log('mails was changed');
      }
    }
  }

}










