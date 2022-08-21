export default {
    props: ['note'],
    template: `
        <article class="note note-layout">
           <img :src="note.info.url" alt="img" /> 
        </article>
    `,
    components: {},
    created() { },
    mount() { },
    data() {
        return {}
    },
    methods: {

    },
    computed: {},
    watch: {},
    unmounted() { },
}