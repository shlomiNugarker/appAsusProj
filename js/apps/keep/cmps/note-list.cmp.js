import notePreviewCmp from './note-txt.cmp.js'
import noteTxt from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteTodos from './note-todos.cmp.js';
export default {
    props: ['notes'],
    template: `
        <section>
            <ul class="clean-list note-list note-list-layout">
            <li v-for="(note, idx) in notes">
            <component :is="note.type" :noteInfo="note.info"></component>
                   <div class="actions">
                        <button @click = onRemove(note.id)>X</button>
                        <!-- <button @click = onEdit(note.id)>Edit</button> -->
                    </div>
                </li>
            </ul>
        </section>
    `,
    components: {
        notePreviewCmp,
        noteTxt,
        noteImg,
        noteVideo,
        noteTodos
    },
    created() {

    },
    mount() {
    },
    data() {
        return {

        }
    },
    methods: {
        onRemove(id) {

            this.$emit('remove', id);

        },
        onEdit(id) {
            this.$emit('edit', id);
        }
    },
    computed: {},
    watch: {},
    unmounted() { },
}