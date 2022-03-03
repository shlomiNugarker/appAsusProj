import { eventBus } from '../../../services/eventBus-service.js'
import { noteService } from '../services/note.service.js'
import noteListCmp from '../cmps/note-list.cmp.js'
import addingNoteCmp from '../cmps/adding-note.cmp.js'
export default {
  // props: [""],
  template: `

  <adding-note-cmp @add = "addNote"/>
  <note-list-cmp :notes ="notes" @remove ="removeNote"/>
        
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
  methods: {

    addNote(note) {
      noteService.saveNote(note)
        .then(note => {
          noteService.query
            .then(notes => {
              notes.push(note)
              eventBus.emit('show-msg', { txt: 'Saved succesfully', type: 'success' })
            })
        })
        .catch(err => {
          eventBus.emit('show-msg', { txt: `could not be  removed`, type: 'error' })
        })

    },

    removeNote(id) {
      console.log(this.notes)
      noteService.remove(id)
        .then(() => {
          const idx = this.notes.findIndex(note => note.id === id)
          this.notes.splice(idx, 1);
          eventBus.emit('show-msg', { txt: 'removed succesfully', type: 'success' })
        })
        .catch(err => {
          eventBus.emit('show-msg', { txt: `could not be removed`, type: 'error' })
        })
    }
  },
  computed: {},
  watch: {},
  unmounted() { },
}