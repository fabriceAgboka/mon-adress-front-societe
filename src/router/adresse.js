export default [{
        path: '/adresses/actif',
        name: 'adresses-actif',
        component: () => import('@/views/pages/adresses/index.vue'),
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
        component: () => import('@/views/pages/adresses/index.vue'),
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
        component: () => import('@/views/pages/adresses/index.vue'),
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
        component: () => import('@/views/pages/adresses/index.vue'),
        meta: {
            pageTitle: 'Adresses suspendu',
            breadcrumb: [{
                text: 'Adresses suspendu',
                active: true,
            }, ],
        },
    }, {
        path: '/adresses/traitement',
        name: 'adresses-traitement',
        component: () => import('@/views/pages/adresses/index.vue'),
        meta: {
            pageTitle: 'Adresses traitement',
            breadcrumb: [{
                text: 'Adresses traitement',
                active: true,
            }, ],
        },
    },
]