export default {
    props: ['note'],
    template: `
        <article class="note">
           <p>{{note.info.txt}}</p>
        </article>
    `,
    components: {},
    created() {

    },
    mount() {

    },
    data() {
        return {}
    },
    methods: {

    },
    computed: {},
    watch: {},
    unmounted() { },
}