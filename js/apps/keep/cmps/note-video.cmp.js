export default {
    props: ['noteInfo'],
    template: `
        <article class="note">
               
            <iframe width="420" height="345" src="https://www.youtube.com/embed/noteInfo.url">
                Sorry, your browser doesn't support embedded videos.
            </iframe>      
             
            
     
        </article>
    `,
    components: {},
    created() {
        console.log(this.noteInfo);
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