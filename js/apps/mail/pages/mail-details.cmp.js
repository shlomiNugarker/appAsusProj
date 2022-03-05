import { mailService } from "../services/mail.service.js";

export default {
  template: `
    <!-- <section v-if="mail" class=""> -->



<!-- 

    <div class="page-container">

    <div class="header-details">
      <h1> {{ mail.status }}: </h1>
    </div>
  
      <div class="details-container">
        <router-link to="/mailBox">Back</router-link>
    
       
          <div class="details-msg">
            <div class="header-msg">
              <h1>{{ mail.subject }}</h1>
            </div>

            <div class="time-details">
              <p> {{ getFromUserName }} </p>
              <p> {{ getSentTime }}</p>
            </div>
    
            <div class="body-msg">
              <p> {{ mail.body }} </p>
            </div>
    
            <div class="footer-msg">
    
            </div>
    
          </div>
  
  
      </div>

    </div> -->

        
    <!-- </section> -->
    `,
  // data() {
  //   return {
  //     mails: null,
  //     mail: null 
  //   }
  // },
  // created() {
  //   const id = this.$route.params.emailId;
  //   mailService.get(id)
  //     .then(mail => this.mail = mail)
  // },
  // computed: {

  //   getSentTime(){
  //     var sent = this.mail.sentAt
  //     var date = new Date(sent).toLocaleDateString()
  //     return date
  //   }, 
  //   getFromUserName(){
  //     return this.mail.to
  //   }
  // }
}


