export default {
    props: ['noteInfo'],
    template: `
        <article class="note">
               
            <!-- <iframe width="420" height="345" :src="https://www.youtube.com/embed/{{videoId}}"/> -->

        </article>
    `,
    components: {},
    created() {

    },
    mount() {

    },
    data() {
        return {
            videoId: this.noteInfo.url
        }
    },
    methods: {

    },
    computed: {
        getVideoId() {
            console.log(this.videoId)

            // var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;

            // var match = this.videoId.match(regExp);
            // return (match && match[1].length == 11) ? match[1] : false;
        }
    },
    watch: {},
    unmounted() { },
}