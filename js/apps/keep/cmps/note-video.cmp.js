export default {
    props: ['noteInfo'],
    template: `
        <article class="note">
               
            <video width="400" controls autoplay="false">
                <source :src="noteInfo.url" type="video/mp4">
                <source src="noteInfo.url" type="video/ogg">
                <source src="noteInfo.url"
                type="video/webm">
                Sorry, your browser doesn't support embedded videos.
            </video> 

     
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