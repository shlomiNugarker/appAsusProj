import { eventBus } from '../../../services/eventBus-service.js'
import { noteService } from '../services/note.service.js'
import addNoteCmp from '../cmps/add-note.cmp.js'
import noteListCmp from '../cmps/note-list.cmp.js'
import editNoteCmp from '../cmps/edit-note.cmp.js'
export default {
  // props: [""],
  template: `
<section class = "main-layout flex">
  <add-note-cmp @add="addNote"/>
  <note-list-cmp :notes="notes" @remove="removeNote" @setVal="setVal"/>
  <edit-note-cmp @updatedNote="updateNote" class= "edit-note"/>
</section>  
    `,
  components: {
    addNoteCmp,
    noteListCmp,
    editNoteCmp

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
          noteService.query()
            .then(notes => {
              this.notes = notes
              eventBus.emit('show-msg', { txt: 'Saved succesfully', type: 'success' })
            })
        })
        .catch(err => {
          eventBus.emit('show-msg', { txt: `could not be  added`, type: 'error' })
        })

    },
    updateNote(val) {
      var idx = this.notes.findIndex(note => note.id === val.id)
      this.notes.splice(idx, 1, val)
    },

    removeNote(id) {
      noteService.remove(id)
        .then(() => {
          const idx = this.notes.findIndex(note => note.id === id)
          this.notes.splice(idx, 1)
          eventBus.emit('show-msg', { txt: 'removed succesfully', type: 'success' })
        })
        .catch(err => {
          eventBus.emit('show-msg', { txt: `could not be removed`, type: 'error' })
        })
    },

    setVal(noteKey, val, id) {
      noteService.getNote(id)
        .then(note => {
          note[noteKey][val.property] = val.val
          noteService.saveNote(note)
            .then(note => {
              const idx = this.notes.findIndex(note => note.id === id)
              this.notes.splice(idx, 1, note)
            })
        })

    }

  },
  computed: {},
  watch: {},
  unmounted() { },
}