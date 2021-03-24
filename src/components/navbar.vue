<template>
<div>
    <header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
  
  <!-- Logo text or image -->
  <div class="flex items-center justify-between mb-4 md:mb-0">
    <h1 class="leading-none text-2xl text-grey-darkest">
      <a class="no-underline text-grey-darkest hover:text-black" href="http://localhost:8080/vueweb-chairgo/">
        Chair
      </a>
      <router-link to="/display">
        <a class="no-underline text-grey-darkest hover:text-black" href="http://localhost:8080/">
          GO
        </a>
      </router-link>
    </h1>

    <a class="text-black hover:text-orange md:hidden" href="#">
      <i class="fa fa-2x fa-bars"></i>
    </a>
  </div> 
  <!-- END Logo text or image -->
  
  <!-- Search field -->
  <form class="mb-4 w-full md:mb-0 md:w-1/4">
    <label class="hidden" for="search-form">Search</label>
    <input class="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text">
    <button class="hidden">Submit</button>
  </form>
  <!-- END Search field -->
  
  <!-- Global navigation -->
  <nav>
    
    <ul class="list-reset md:flex md:items-center h-full">
      <li class="md:ml-4 ">
        <router-link to="/" active-class="active">Home</router-link>
      </li>
      <li class="md:ml-4">
        <router-link to="/about">About</router-link>
      </li>
      <li class="md:ml-4">
        <router-link to="/news">News</router-link>
      </li>
       <li class="md:ml-4">
        <router-link to="/products">Products</router-link>
      </li>
       <li class="md:ml-4">
        <router-link to="/contact">Contact</router-link> 
      </li>
       <li class="md:ml-4">
         <button @click="toggleModal">Cart</button>
        <!-- <router-link to="/cart">Cart</router-link> -->
      </li>
      <li class="md:ml-4">
        <router-link to="/sign">Sign in</router-link>
        <!-- router-link 加 tag 轉換屬性 -->
      </li>
    </ul>
  </nav>
</header>

<div v-if="showModal">
  <CartSide msg="home" theme="car" @close='toggleModal'/> 
</div>
</div>
</template>

<script>
import CartSide from './CartsideBar'

export default {
  name: 'Navbar',
  components:{
      CartSide
      },
  props: {
    msg: String,
    theme: String
  },
  data(){
    return{
      showModal: false
    }
  },
  methods:{
    toggleModal(){
      this.showModal = !this.showModal
    }
  }
}
</script>
<style scoped>
.active{
  background-color: whitesmoke;
}
</style>