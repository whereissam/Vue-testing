<template>
  <div class="home">
    <Carousel/>
    <products />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '../components/Carousel'
import Products from '../components/Products'

export default {
  name: 'Home',
  components: {
    Carousel,
    Products
  }
}
</script>
