import noteTxt from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteTodos from './note-todos.cmp.js';
import { eventBus } from '../../../services/eventBus-service.js';
export default {
    props: ['notes'],
    template: `
        <section>
            <ul class="clean-list note-list note-list-layout">
            <li v-for="(note, idx) in notes" :key="note.id" :style="note.style">
            <component :is="note.type" :note="note"></component>
                   <div class="actions">
                        <button @click = onRemove(note.id) title="Delete">X</button>
                        <button @click = onEdit(note.id) title="Edit">Edit</button>
                        <input type="color" @change = "onChangeBcg($event.target.value,note.id)" title="Change backround color" :value="note.style.backgroundColor"/>
                    </div>
                </li>
            </ul>
        </section>
    `,
    components: {
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

            this.$emit('remove', id)

        },
        onEdit(id) {
            eventBus.emit('edit', { id })

        },
        onChangeBcg(val, id) {
            this.$emit('setVal', 'style', {
                property: 'backgroundColor',
                val
            }, id)
        }
    },
    computed: {},
    watch: {},
    unmounted() { },
}