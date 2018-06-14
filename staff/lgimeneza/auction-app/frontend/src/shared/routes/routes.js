import Profile from '../app/profile.jsx';
import Landing from '../app/landing.jsx'
import Product from '../app/product.jsx'
import Login from '../app/login.jsx'

export default {
    routes: [
        {
            path: '/',
            component: Landing,
            exact: true
        },
        {
            path: '/product/:id',
            component: Product,
            exact: true
        },
        {
            path: '/login',
            component: Login,
            exact: true
        }
    ],
    privateRoutes: [
        {
            path: '/profile',
            component: Profile,
            exact: true
        },
    ],
    redirects: [
        {
            from: '/people',
            to: '/profile',
            status: 301
        }
    ]
} 