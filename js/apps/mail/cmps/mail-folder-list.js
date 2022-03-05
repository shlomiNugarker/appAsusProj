import {utilService} from '../../../services/util-service.js'


export default {
  props: ["mails","folderType"],
  template: `
      <section>
        <div>
          <div class="logo-container">

          <div class="menu-btn">
            <div class="line-logo"></div>
            <div class="line-logo"></div>
            <div class="line-logo"></div>
          </div>
            <div>
              <img src="./css/apps/mail/icons/logo.png">
            </div>
            <p class="logo">App-sus</p>
          </div>

          <div class="compose-container">
            <p @click="clickCompose">Compose</p>
          </div>
        
          <div class="btns-container">
            <p>email </p>

            <div @click="folderClicked('inbox')" class="folder-btn-contnr flex align-center" >
              <img class="folder-img" src="./css/apps/mail/icons/inbox.svg">
              <p >Inbox <span>{{ getUnreadCount }}</span></p>
            </div>

            <div @click="folderClicked('sent')" class="flex">
              <img class="folder-img" src="./css/apps/mail/icons/sent.svg"> 
              <p>sent</p>
            </div>

            <div @click="folderClicked('draft')" class="flex">
              <img class="folder-img" src="./css/apps/mail/icons/draft.svg">
              <p>Draft</p>  
            </div>

            <div @click="folderClicked('trash')" class="flex">
              <img class="folder-img" src="./css/apps/mail/icons/trash.svg">
              <p>trash</p>   
            </div>
          </div>
          
        </div>
      </section>
    `,
  data() {
    return {
      isNewMsg: false,
      selectedFolder: ''
    }
  },
  methods: {
    clickCompose(){
      this.$emit('select', this.isNewMsg)
      console.log(this.folderType);
    },
    folderClicked(str){
      this.$emit('folderSelected', str)
    },
    
  },
  computed: {
    getUnreadCount(){
      if(!this.mails) return
      var unreadCount = 0
      this.mails.forEach(mail => {
        if(mail.status !== 'inbox') return
        if(!mail.isRead) unreadCount++
      })
      return unreadCount 
    }
  },
  folderStyle(){
    if(!this.folderType)return
    if(this.folderType === 'inbox') return 'red'
    else if(this.folderType === 'sent') return 'red'
    else if(this.folderType === 'draft') return 'red'
    else if(this.folderType === 'trash') return 'red'
  }
}


