import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '../helpers/auth'

Vue.use(VueRouter)

const ifAuthenticated = (to, from, next) => {
  if (auth.getUser()) {
    next()
    return
  }
  next('/login')
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Tableau de board',
        breadcrumb: [{
          text: 'Tableau de board',
          active: true,
        }, ],
      },
      beforeEnter: ifAuthenticated
    },
    {
      path: '/adresses',
      name: 'adresses',
      component: () => import('@/views/pages/adresses/index.vue'),
      meta: {
        pageTitle: 'Adresses',
        breadcrumb: [{
          text: 'Adresses',
          active: true,
        }, ],
      },

      beforeEnter: ifAuthenticated,
    },
    {
      path: '/adresses/actif',
      name: 'adresses-actif',
      component: () => import('@/views/pages/adresses/actif.vue'),
      meta: {
        pageTitle: 'Adresses actif',
        breadcrumb: [{
          text: 'Adresses actif',
          active: true,
        }, ],
      },
    },
    {
      path: '/adresses/inactif',
      name: 'adresses-inactif',
      component: () => import('@/views/pages/adresses/inactif.vue'),
      meta: {
        pageTitle: 'Adresses inactif',
        breadcrumb: [{
          text: 'Adresses inactif',
          active: true,
        }, ],
      },
    },
    {
      path: '/adresses/encours',
      name: 'adresses-encours',
      component: () => import('@/views/pages/adresses/encours.vue'),
      meta: {
        pageTitle: 'Adresses encours',
        breadcrumb: [{
          text: 'Adresses encours',
          active: true,
        }, ],
      },
    },
    {
      path: '/adresses/suspendu',
      name: 'adresses-suspendu',
      component: () => import('@/views/pages/adresses/suspendu.vue'),
      meta: {
        pageTitle: 'Adresses suspendu',
        breadcrumb: [{
          text: 'Adresses suspendu',
          active: true,
        }, ],
      },
    },
    {
      path: '/adresses/traitement',
      name: 'adresses-traitement',
      component: () => import('@/views/pages/adresses/traitement.vue'),
      meta: {
        pageTitle: 'Adresses traitement',
        breadcrumb: [{
          text: 'Adresses traitement',
          active: true,
        }, ],
      },
    },
    {
      path: '/admins',
      name: 'admins',
      component: () => import('@/views/pages/admins/index.vue'),
      meta: {
        pageTitle: 'Administrateurs',
        breadcrumb: [{
          text: 'admins',
          active: true,
        }, ],
      },
      beforeEnter: ifAuthenticated,
    }, {
      path: '/users/:id',
      name: 'users_adresses',
      component: () => import('@/views/pages/users/index.vue'),
      meta: {
        pageTitle: 'Utilisateur',
        breadcrumb: [{
          text: 'users',
          active: true,
        }, ],
      },
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/second-page',
      name: 'second-page',
      component: () => import('@/views/SecondPage.vue'),
      meta: {
        pageTitle: 'Second Page',
        breadcrumb: [{
          text: 'Second Page',
          active: true,
        }, ],
      },
    }, {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/adresses-test',
      name: 'adresses-test',
      component: () => import('@/views/components/adresse.vue'),
      meta: {
        pageTitle: 'Adresses test',
        breadcrumb: [{
          text: 'Adresses test',
          active: true,
        }, ],
      },
    }, {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router