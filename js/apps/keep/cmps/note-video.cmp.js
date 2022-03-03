export default {
    props: ['noteInfo'],
    template: `
        <article class="note">
           <p>{{noteInfo.url}}</p> 
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