import { createRouter, createWebHashHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import DashboardView from '@/views/DashboardView.vue';
import CampaignsView from '@/views/CampaignsView.vue';
import ChatbotsView from '@/views/ChatbotsView.vue';
import UsersView from '@/views/UsersView.vue';
import SobreBotView from '@/views/SobreBotView.vue';
import ChatBotView from '@/views/ChatBotView.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView,
    meta: { title: 'Login' }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { title: 'Dashboard', requiresAuth: true } // Example meta field
  },
  {
    path: '/campanhas',
    name: 'Campanhas',
    component: CampaignsView,
    meta: { title: 'Gestão de Campanhas', requiresAuth: true }
  },
  {
    path: '/chatbots',
    name: 'Chatbots',
    component: ChatbotsView,
    meta: { title: 'Gestão de Chatbots', requiresAuth: true }
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: UsersView,
    meta: { title: 'Gestão de Usuários', requiresAuth: true }
  },
  {
    path: '/sobre-bot', // Nova rota
    name: 'SobreBot',
    component: SobreBotView,
    meta: { title: 'Sobre o Bot', requiresAuth: true } // Manter requiresAuth se aplicável
  },
  {
    path: '/chatbot',
    name: 'ChatBot',
    component: ChatBotView,
    meta: { title: 'Chat Bot', requiresAuth: true } // Manter requiresAuth se aplicável
  },
  // Add redirect for unknown paths maybe?
  // { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHashHistory(), // Using hash history for simplicity in this environment
  routes,
});

// Basic navigation guard example (optional)
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = false; // Replace with actual auth check
//   if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
//     next({ name: 'Login' });
//   } else {
//     next();
//   }
// });

export default router;
