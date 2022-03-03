import notePreviewCmp from '../cmps/note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
        <section class = "notes-list note-list-layout">
            <ul class="clean-list">
            <li v-for="note in notes" :key="note.id">
                   <note-preview-cmp :note="note" />
                   <div class="actions">
                        <button @click = onRemove(note.id)>X</button>
                        <button @click = onEdit(note.id)>Edit</button>
                    </div>
                </li>
            </ul>
        </section>
    `,
    components: {
        notePreviewCmp
    },
    created() { },
    mount() { },
    data() {
        return {}
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