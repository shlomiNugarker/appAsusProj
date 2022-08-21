import homePage from './pages/app-home.cmp.js'
import aboutPage from './pages/app-about.cmp.js'
import mailBoxPage from './apps/mail/pages/mail-app.cmp.js'
import emailDetails from './apps/mail/pages/mail-details.cmp.js'
import keepPage from './apps/keep/pages/note-app.cmp.js'

const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/about',
    component: aboutPage,
  },
  {
    path: '/mailBox',
    component: mailBoxPage,
  },
  {
    path: '/mailBox/:emailId',
    component: emailDetails,
  },
  // {
  //     path: '/keep/:noteId?',
  //     component: keepPage
  // },
]

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
})
