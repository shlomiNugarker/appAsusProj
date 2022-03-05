export default {
    props: ['noteInfo'],
    template: `
        <article class="note note-layout">
           <img :src="noteInfo.url" alt="img" /> 
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