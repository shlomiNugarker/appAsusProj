import { eventBus } from '../../../services/eventBus-service.js'
import { noteService } from '../services/note.service.js'
export default {
    template: `
        <section v-if="noteToEdit" >
            <textarea cols="30" rows="10" v-model="newInput"/>
            <button @click="update">Update</button>
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
                this.newInput = (info.todos).map(todo => this.newInput += todo.txt)
                console.log(this.newInput)
            }
        },

        update() { }
    },
    computed: {

    },
    watch: {},
    unmounted() {
        this.unsubscribe()
    },
}