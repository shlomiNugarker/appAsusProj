import longText from "../../../cmps/long-text.cmp.js"
export default {
  props: ["mail"],
  template: `

    <section>
      <router-link :to="'/mailBox/'+mail.id" class="link-row ">
        
          
            <span class="title">
              <span>😶</span>
              <span>😶</span>
              <span>😶</span>
              <span class=""> {{ mail.subject }} </span>
            </span>


          <span>  
              {{ getShortTxt }}
          </span>
        


        <span>
        {{ getSentTime }}
        </span>
        
      </router-link>
    </section>

    `,
  components: {
    longText
  },
  created() {
    
  },
  mount() {

  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    getShortTxt(){
      if(this.mail.body.length < 50) return this.mail.body
      return this.mail.body.slice(0, 50) + '...'
    },
    getSentTime(){
      var sent = this.mail.sentAt
      var date = new Date(sent).toLocaleDateString()

      return date
    }
  },
  watch: {},
  unmounted() {},
}