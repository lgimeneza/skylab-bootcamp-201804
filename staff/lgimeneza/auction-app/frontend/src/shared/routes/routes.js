import User from '../app/user.jsx';
import Landing from '../app/landing.jsx'
import Product from '../app/product.jsx'

export default {
    routes: [
        {
            path: '/',
            component: Landing,
            exact: true
        },
        {
            path: '/user',
            component: User,
            exact: true
        },
        {
            path: '/product/:id',
            component: Product,
            exact: true
        }
    ],
    redirects: [
        {
            from: '/people',
            to: '/user',
            status: 301
        }
    ]
} 