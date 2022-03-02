import { noteService } from '../services/note.service.js'
export default {
    template: `
        <section class="add-note">
<input type="text" @keyup.enter ="onAddNote">
<pre>{{note.info.text}}</pre>
    </section>
    `,
    components: {},
    created() { },
    mount() { },
    data() {
        return {
            instructions: 'Enter Text',
            note: {
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: null
                }
            },

        }
    },
    methods: {
        onGetNoteType(val) {
            // console.log(val);
            // val = this.noteType
        },
        onAddNote(ev) {
            if (this.note.type === 'note-txt')
                this.note.info.txt = ev.target.value.trim()
            ev.target.value = '';
            noteService.saveNote(this.note)
                .then(note => console.log(note))
        }
    },
    computed: {
    },
    watch: {},
    unmounted() { },
}