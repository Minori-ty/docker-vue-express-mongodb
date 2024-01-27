import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
            component: () => import('../components/Layout.vue'),
            children: [
                {
                    path: '/home',
                    component: () => import('../components/Home.vue'),
                    children: [
                        {
                            path: 'child',
                            component: () => import('../components/Child.vue'),
                        },
                    ],
                },
                {
                    path: '/about',
                    component: () => import('../components/About.vue'),
                },
            ],
        },
        {
            path: '/:pathMatch(.*)*',
            meta: { title: '404' },
            component: () => import('../components/404.vue'),
        },
    ],
})

export default router
