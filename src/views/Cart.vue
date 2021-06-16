<template>
<body class="bg-gray-100 mt-20">
  <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-3/5 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">{{ carts.length}} Items</h2>
        </div>
                  <div v-if="carts" class="relative m-10">
                    <div class='w-full flex h-24 border-gray-300' v-for='(product,index) in carts' :key='product.id'>
                    <img class="w-20 h-20 " :src="product.img">
                    <button class="detail absolute right-2" @click="removeHandler(index,product.id)">x</button>
                    <div class="w-full p-2">
                        <h1 class=" mb-3 text-left ml-2">{{product.name}}</h1>
                        <div class="flex ml-2 w-full justify-between">
                            <div class="flex ">
                                <p class="mr-2">Qty</p>
                                <button @click='decrement(index,product.id)' :disabled='product.number < 2' class="text-xs">◀</button>
                                <input class="w-6 text-center" 
                                        type="text"
                                        v-model.number="product.number" >
                                <button @click='increment(index,product.id)' class="text-xs">▶</button>
                            </div>
                            <p class="text-sm">${{product.number * product.price}}</p>
                        </div>

                        </div>
                    </div>
                    
                </div>
              
                <div v-else>
                    <hr class="my-5">
                    <div class='border-gray-200 w-full text-center flex flex-wrap flex-col h-full justify-between'>
                        <div class="h-1/3 my-5 w-full">
                            <div class='text-center self-start mt-10 mb-5'>X</div>
                            <div>No products in the cart.</div>
                        </div>
                        <div>
                             <p class='border-2 border-gray-500 border-opacity-50 w-full text-center h-14 align-middle m-5 md:h-7 self-end cursor-pointer'>Continue shopping</p>
                        </div>
                       
                    </div>
                </div>
          

        <router-link class="flex font-semibold text-indigo-600 text-sm mt-10 " to="/products">
            <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
            Continue Shopping
        </router-link>
      </div>

      <div id="summary" class="w-2/5 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5" >
          <span class="font-semibold text-sm uppercase">Items {{ carts.length}}</span>
          <span class="font-semibold text-sm">{{totalPrice | showPrice}}</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div class="py-10">
          <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full">
        </div>
        <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>${{totalPrice +10 }}</span>
          </div>
          <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" @click="viewBill">Proceed to checkout</button>
        </div>
      </div>

    </div>
  </div>
</body>


</template>
<script>
import db from '../components/firebase'

export default {
  name: 'Cart',
  props: {
    id: Number
  },
   data(){
      return{
          carts: [],
      }
  },
  filters:{
    showPrice(price){
      return '$' + price.toFixed(2)
    },
  },
   computed:{
        totalPrice(){
          return this.carts.reduce((prevValue, product)=>{
            return prevValue + product.price * product.number
            }, 0)
          } 
        },
  methods:{
    closeModal(){
        this.$emit('close') //
    },
    decrement(index,id){
          db.collection("cart").doc(id).update({
			"number": this.carts[index].number --
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    },
    increment(index,id){
        let value = this.carts[index].number ++
        // console.log(this.carts[index].number)
        db.collection("cart").doc(id).update({
			    "number": value
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    },
    removeHandler(index,id){
         db.collection("cart").doc(id).delete().then(() => {
           this.carts.splice(index,1)
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    },
      viewBill(){
          this.$router.push('/checkout') 
      },
  },
      created(){
        db.collection("cart").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // console.log(`${doc.id} => ${doc.data()}`);
              const data = {
                'id' : doc.id,
                'name' : doc.data().name,
                'number' : doc.data().number,
                'price' : doc.data().price,
                'img' : doc.data().img
              }
              this.carts.push(data)
             
            }); 
        });
    }
}
</script>
<style>

/* .detail::before{
  content: "x";
  color:#EEEEEE;
  position: absolute;
  right: 10px;
    top: 15px
} */
</style>