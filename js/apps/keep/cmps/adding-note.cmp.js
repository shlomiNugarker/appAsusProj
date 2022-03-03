import { noteService } from '../services/note.service.js'

export default {
    template: `
        <section class="add-note">
            <!-- <form > -->
                <input type="text" @keyup.enter.stop.prevent="onAddNote" :placeholder="instructions" required>
                <label for="note-txt">Text</label>
                <input type="radio" name="note-txt" value="note-txt" v-model ="noteType" />
                 <label for="note-video">Image</label>
                <input  type="radio" name="note-img" value="note-img" v-model="noteType" />
               <label for="note-video">Video</label>
                <input  type="radio" name="note-video" value="note-video" v-model="noteType" />
                <label for="note-video">Todo</label>
                <input type="radio" name="note-todo" value="note-todo" v-model="noteType" />
            <!-- </form> -->
         </section>
    `,
    components: {},
    created() {
        const id = this.$route.params.noteId;
        if (id) {
            noteService.get(id)
                .then(note => {
                    this.noteToedit = note
                    this.noteType = this.noteToedit.type
                });

        }
    },
    mount() { },
    data() {
        return {
            noteType: 'note-txt',
            instructions: 'Please Enter Text',
            noteToedit: {
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: null
                }
            },

        }
    },
    methods: {

        onAddNote(ev) {
            var val = ev.target.value.trim();
            if (!val.length) return
            var inputPlace = this.noteToedit.info

            if (this.noteType === 'note-txt')
                inputPlace.txt = val
            else if (this.noteType === 'note-todo') {

                var todos = val.split(',')
                todos.map(todo => {
                    (inputPlace.todos).push({ txt: todo.trim(), doneAt: null })
                })
                //Video and image notes
            } else {

                inputPlace.url = val.trim()

            }

            ev.target.value = '';
            this.$emit('add', this.noteToedit)

        },
    },
    computed: {
    },
    watch: {
        noteType(val) {
            this.noteToedit = noteService.getNoteType(val)
            switch (this.noteType) {
                case 'note-txt':
                    this.instructions = 'Please Enter Text'
                    break
                case 'note-img':
                    this.instructions = 'Please Enter image URL'
                    break
                case 'note-video':
                    this.instructions = 'Please Enter video URL'
                    break
                case 'note-todo':
                    this.instructions = 'Please Enter comma separated list'
                    break
            }

        }


    },
    unmounted() { },
}