import { eventBus } from '../../../services/eventBus-service.js'
import { noteService } from '../services/note.service.js'
import noteListCmp from '../cmps/note-list.cmp.js'
import addNoteCmp from '../cmps/add-note.cmp.js'
export default {
  // props: [""],
  template: `
<section class = "main-layout flex">
  <add-note-cmp @add="addNote"/>
  <note-list-cmp :notes="notes" @remove="removeNote"/>
  <!-- <div class= "edit-note">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis error mollitia ex adipisci quae ea aliquid iusto inventore, ullam culpa voluptate, sunt dolore eos amet? Possimus voluptatem sunt consectetur aliquid.</div> -->
</section>  
    `,
  components: {
    addNoteCmp,
    noteListCmp,

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
          this.notes.push(note)
          eventBus.emit('show-msg', { txt: 'Saved succesfully', type: 'success' })
        })
        .catch(err => {
          eventBus.emit('show-msg', { txt: `could not be  added`, type: 'error' })
        })

    },

    removeNote(id) {
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