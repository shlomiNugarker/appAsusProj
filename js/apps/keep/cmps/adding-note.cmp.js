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
    created() { },
    mount() { },
    data() {
        return {
            noteType: 'note-txt',
            instructions: 'Please Enter Text',
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

        onAddNote(ev) {
            var val = ev.target.value.trim();
            if (!val.length) return
            if (this.noteType === 'note-txt')
                this.note.info.txt = val
            else if (this.noteType === 'note-todo') {
                val.split(',').map(todo => {
                    (this.note.info.todos).push({ txt: todo.trim(), doneAt: null })
                })
                console.log(this.note);
            } else {

                this.note.info.url = val;

            }

            ev.target.value = '';
            noteService.saveNote(this.note)
                .then(note => console.log(note))
        },
    },
    computed: {
    },
    watch: {
        noteType(val) {
            this.note = noteService.getNoteType(val)
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