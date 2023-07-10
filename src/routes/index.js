import { createRouter, createWebHashHistory } from 'vue-router';
import Ticket from '../views/Ticket.vue';
import Chat from '../views/Chat.vue';
import Main from '../views/Main.vue';
import Posts from '../views/Posts.vue';

const routes = [
  { path: '/ticket', component: Ticket },
  { path: '/chat', component: Chat },
  { path: '/main', component: Main },
  { path: '/posts', component: Posts },
]


const router = createRouter({
    
  history: createWebHashHistory(),
  routes,
})

export default router;