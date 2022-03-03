export default {
    props: ['noteInfo'],
    template: `
        <article v-for = "(info,idx) in noteInfo.todos"  class="note-preview">
           <p>{{info.txt}}</p> 
           <p>{{info.doneAt}}</p> 
        </article>
    `,
    components: {},
    created() {
        console.log('im here');
    },
    mount() { },
    data() {
        return {
            // txts: noteInfo.todos
        }
    },
    methods: {

    },
    computed: {
        showTodos() {
            txts.map({})
        }
    },
    watch: {},
    unmounted() { },
}