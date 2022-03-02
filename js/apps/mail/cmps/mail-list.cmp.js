
import mailPreview from '../cmps/mail-preview.cmp.js'

export default {
  props: ["mails"],
  template: `
        <section>
          <!-- <h1>mail-list</h1>
          <mail-preview></mail-preview> -->

        <input type="text" v-model="txt">
        <button @click="getNote">button</button>

          
        </section>
    `,
  components: {
    mailPreview,
  },
  created() {},
  mount() {

  },
  data() {
    return {
      type: "note-txt",
      isPinned: true,

      txt: "Fullstack Me Baby!"

    }
         
     
   
  },
  methods: {
    getNote(){
      console.log(this.txt);
      this.txt = ''
    }
  },
  computed: {
    getName(){
      // const regex = new RegExp([^@]+)
    },
   
    
  },
  watch: {},
  unmounted() {},
}