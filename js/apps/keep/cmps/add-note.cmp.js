import { noteService } from '../services/note.service.js'

export default {
    template: `
        <section class="add-note add-note-layout flex">
             
                <button @click="onAddNote">Save</button>
                <input  type="text" v-model.trim="inputVal" :placeholder="instructions" required>
                <label for="note-txt">Text</label>
                <input type="radio" name="note-txt" value="note-txt" v-model ="noteType" />
                 <label for="note-video">Image</label>
                <input  type="radio" name="note-img" value="note-img" v-model="noteType" />
                <label for="note-video">Video</label>
                <input  type="radio" name="note-video" value="note-video" v-model="noteType" />
                <label for="note-video">Todo</label>
                <input type="radio" name="note-todos" value="note-todos" v-model="noteType" />

         </section>
    `,
    components: {},
    created() {
    },
    mount() { },
    data() {
        return {
            noteType: 'note-txt',
            instructions: 'Please Enter Text',
            inputVal: null,
            newNote: {
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: null
                }
            },


        }
    },
    methods: {

        onAddNote() {
            if (!this.inputVal) return
            var inputPlace = this.newNote.info

            if (this.noteType === 'note-txt')
                inputPlace.txt = this.inputVal
            else if (this.noteType === 'note-todos') {

                var todos = this.inputVal.split(',')
                todos.map(todo => {
                    (inputPlace.todos).push({ txt: todo.trim(), doneAt: null })
                })
                //Video and image notes
            } else {

                inputPlace.url = this.inputVal

            }

            this.inputVal = null
            this.$emit('add', this.newNote);

        },
    },
    computed: {
    },
    watch: {
        noteType(val) {
            this.newNote = noteService.getEmptyNote(val)
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
                case 'note-todos':
                    this.instructions = 'Please Enter comma separated list'
                    break
            }

        }


    },
    unmounted() { },
}