import { eventBus } from '../../../services/eventBus-service.js'
import { noteService } from '../services/note.service.js'
export default {
    template: `
        <section v-if="newInput" >
            <textarea cols="30" rows="10" v-model="newInput"/>
            <button @click="update" title="Update">Update</button>
            <button @click="newInput = null" title="Cancel">Cancel</button>
        </section>
    `,
    components: {},
    created() {
        this.unsubscribe = eventBus.on('edit', this.edit)
    },
    mount() { },
    data() {
        return {
            noteToEdit: null,
            newInput: ''


        }
    },
    methods: {
        edit(noteId) {
            noteService.getNote(noteId.id)
                .then(note => {
                    this.noteToEdit = note
                    this.copynoteData()
                })

        },
        copynoteData() {
            var info = this.noteToEdit.info
            if (this.noteToEdit.type === 'note-txt') {
                this.newInput = info.txt

            } else if (this.noteToEdit.type === 'note-img' || this.noteToEdit.type === 'note-video') {
                this.newInput = info.url

            } else if (this.noteToEdit.type === 'note-todos') {
                var newToDoList = (info.todos).map(todo => todo.txt)
                this.newInput = newToDoList
            }
        },

        update() {

            var noteType = this.noteToEdit.type
            var inputPlace = this.noteToEdit.info

            if (noteType === 'note-txt')
                inputPlace.txt = this.newInput
            else if (noteType === 'note-todos') {
                this.noteToEdit.info.todos = []
                var todos = this.newInput.split(',')
                todos.map(todo => {
                    (inputPlace.todos).push({ txt: todo.trim(), doneAt: null })
                })
                //Video and image notes
            } else {

                inputPlace.url = this.newInput

            }
            noteService.saveNote(this.noteToEdit)
                .then(note => this.$emit('updatedNote', { ...this.noteToEdit }))
            this.newInput = null


        }
    },
    computed: {

    },
    watch: {},
    unmounted() {
        this.unsubscribe()
    },
}