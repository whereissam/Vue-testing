<template>
    <div class="productdetail" v-if="product">
   <body class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
    <body class="font-mono bg-gray-400">
		<!-- Container -->
		<div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<!-- Col -->
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg bd-top"
						:style="{ backgroundImage: `url(${product.img})` }"
					></div> <!-- binding to get img in json  -->
					<!-- Col -->
             
					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<div class="px-8 mb-4 text-center">
							<h3 class="pt-4 mb-2 text-2xl">{{product.name}}</h3>
							<p class="mb-4 text-sm text-gray-700 mt-10">
								{{product.price}}
							</p>
						</div>
						<div class="px-8 pt-6 pb-8 mb-4 bg-white rounded w-full">
							<div class="mb-4">
								<p class="block mb-2 text-sm font-bold text-gray-700">
									{{product.detail}}
								</p>
							</div>
							<div class="mb-6 text-center p-3">
                <div class="mb-6 border-red quantity">
                  <button @click='inc1'>-</button>
				  <input  class="w-10 text-center" 
				  			v-model.number="value" 
							type="text" 
							oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
							>
                  <!-- <input class="w-10 text-center input-text qty text" type="name" id="quantity_xxx" step="1" min="1" max name="quantity" value="1" size="4" placeholder pattern="[0-9]">  -->
                  <button @click='add1'>+</button>
                </div>
					<button
						class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
						type="button"
						@click="toggleModal"
					>
					Add to cart
					</button>
				</div>
					<hr class="mb-6 border-t" />
            </div>
					</div>
				</div>
			</div>
		</div>
	</body>
</body>
<div v-if="showModal">
  <!-- <CartSide msg="home" theme="car" @close='toggleModal'/>  -->
</div>
    </div>
</template>

<script>
// import CartSide from '../../components/cart-sidebar.vue'
import db from '../components/firebase'

export default {
  name: 'productdetail',
  props:['id'],
   data(){
      return{
          products:[],
          value: 1,
		  showModal: false
      }
  },
	// components:{CartSide},
	methods:{
    add1(){
      this.value = this.value +1
    },
    inc1(){
      this.value = this.value -1
    },
	addToCart(id){
	
	},
	 toggleModal(){
      this.showModal = !this.showModal
    }
  },
   created(){
        // db.collection("products").get().then((querySnapshot) => {
        //   querySnapshot.filter((doc) => {
        //       console.log(`${doc.id} => ${doc.data()}`);
        //       const data = {
        //         'id' : doc.id,
        //         'name' : doc.data().name,
        //         'detail' : doc.data().detail,
        //         'price' : doc.data().price,
        //         'img' : doc.data().img
        //       }
        //       this.products.push(data)
        //     });
        // });
    }
}
</script>

<style>

</style>