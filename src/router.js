import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from '@/store.js';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu',
      name: 'menu_c',
      component: () => import('./views/Menu.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/Signin.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('./views/Join.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: {
        authRequired: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.state.isAuthenticated) {
      next({
        path: '/signin'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
