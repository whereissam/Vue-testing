import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import Home from '../views/Home.vue'

const Home = () => import('../views/Home.vue')
const About =() => import('../views/About.vue')
// const News = () => import('../views/New.vue')
const Product = () => import( '../components/Products.vue')
const ProductDetail = () => import( '../views/ProductDetail.vue')
const Cart = () => import( '../views/Cart.vue')
const Contact = () => import( '../views/Contact.vue')
const Sign = () => import( '../views/Sign.vue')
const Create = () => import( '../views/Create.vue')
// const Vuecanvas = () => import( '../components/P5-canvas.vue')
// const officeChair = () => import('../views/product/OfficeChair.vue')
// const AllProduct = () => import('../views/product/Allproducts.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { 
    path: '/about',
    name: 'About',
    component: About
  },
  // {
  //   path: '/news',
  //   name: 'News',
  //   component: News
  // },
  {
    path: '/products',
    name: 'Product',
    component: Product
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Sign',
    name: 'Sing',
    component: Sign
  },
  {
    path: '/Create',
    name: 'Create',
    component: Create
  },
  // {
  //   path: '/display',
  //   // name: 'Display',
  //   component: Vuecanvas
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
