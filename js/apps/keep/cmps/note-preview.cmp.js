export default {
    props: ['note'],
    template: `
        <article class="note">
           <p>{{note.info}}</p> 
        </article>
    `,
    components: {},
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