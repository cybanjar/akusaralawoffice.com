
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', component: () => import('pages/Index.vue')
      },
      { 
        path: '/about', component: () => import('pages/About.vue')
      },
      {
        path: '/partners', component: () => import('pages/Partners.vue')
      },
      {
        path: '/associates', component: () => import('pages/Associates.vue')
      },
      {
        path: '/legal-service', component: () => import('pages/LegalService.vue')
      },
      {
        path: '/pro-bonitas', component: () => import('pages/ProBonitas.vue')
      },
      {
        path: '/publications', component: () => import('pages/Publications.vue')
      },
      {
        path: '/updates', component: () => import('pages/Updates.vue')
      },
      {
        path: '/contact', component: () => import('pages/Contact.vue')
      },
      {
        path: '/career', component: () => import('pages/Career.vue')
      },
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      {
        path: '/dashboard', component: () => import('pages/Dashboard.vue')
      },
      {
        path: '/dashboard/publish', component: () => import('pages/Publish.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
