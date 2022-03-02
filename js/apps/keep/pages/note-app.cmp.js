import { noteService } from '../services/note.service.js'
import noteListCmp from '../cmps/note-list.cmp.js'
import addingNoteCmp from '../cmps/adding-note.cmp.js'
export default {
  // props: [""],
  template: `

  <adding-note-cmp/>
  <note-list-cmp :notes ="notes"/>
        
    `,
  components: {
    noteListCmp,
    addingNoteCmp
  },
  created() {
    noteService.query()
      .then(notes => this.notes = notes)
  },
  mount() { },
  data() {
    return {
      notes: null
    }
  },
  methods: {},
  computed: {},
  watch: {},
  unmounted() { },
}