export default {
    props: ['note'],
    template: `
        <article  class="note">
            <ul v-for = "(info,idx) in note.info.todos" >
           <li>{{info.txt}} <span v-if="info.doneAt">Done At:{{info.doneAt}}</span>  </li>
           </ul> 
        </article>
    `,
    components: {},
    created() {
    },
    mount() { },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        showTodos() {
        }
    },
    watch: {},
    unmounted() { },
}