import notePreviewCmp from '../cmps/note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
        <section class = "notes-list note-list-layout">
            <ul class="clean-list">
            <li v-for="note in notes" :key="note.id">
                   <note-preview-cmp class="note-preview" :note="note" /></li>
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
    methods: {},
    computed: {},
    watch: {},
    unmounted() { },
}