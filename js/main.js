import { router } from './routers.js'
import appHeader from './cmps/app-header.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'
import longText from './cmps/long-text.cmp.js'



const options = {
    template: `
        <section>
            <app-header/>
            <user-msg />
            <router-view/>
            <long-text/>
            <!-- <app-footer/> -->
        </section>
    
    `,
    components:{
        appHeader,
        // appFooter,
        userMsg,
        longText
    }
}

const app = Vue.createApp(options)
app.use(router)
app.mount('#app')