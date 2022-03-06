export default {
    props: ['note'],
    template: `
        <article class="note">

            <iframe width="853" height="480" :src="'https://www.youtube.com/embed/'+getVideoId" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </article>
    `,
    components: {},
    created() {

    },
    mount() {

    },
    data() {
        return {
            videoId: this.note.info.url
        }
    },
    methods: {

    },
    computed: {
        getVideoId() {

            var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = this.videoId.match(regExp);
            return (match && match[2].length == 11) ? match[2] : false;
        }
    },
    watch: {},
    unmounted() { },
}