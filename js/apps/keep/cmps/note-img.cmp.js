export default {
    props: ['noteInfo'],
    template: `
        <article class="note-preview">
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