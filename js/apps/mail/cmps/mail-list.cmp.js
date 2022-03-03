
import mailPreview from '../cmps/mail-preview.cmp.js'

export default {
  props: ["mails"],
  template: `
      <section class="">
        <div class="flex">

          <div class="compos flex">
            <button>New email</button>
            <p>email</p>
            <button>Inbox</button>
            <button>starred</button>
            <button>sent mail</button>
            <button>Draft</button>      
          </div>
          
          <table>
            <tbody class="">
              <tr class="row" v-for="mail in mails" :key="mail.id">
                <mail-preview :mail="mail"></mail-preview>
              </tr>
            </tbody>
          </table>
        </div>

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

  },
  computed: {
    
  },
  watch: {
    
  },
  unmounted() {

  },
}