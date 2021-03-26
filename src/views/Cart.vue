<template>
 <!-- <div class='w-full h-full flex flex-nowrap bg-gray-600 bg-opacity-25'>

  <div class='darks bg-gray-600 w-9/12' @click="$router.go(-1)"></div>

  <div class='w-1/4 flex flex-wrap bg-gray-800' >
    <h2 class='text-white w-full text-right mr-5 mt-5 ml-5 h-10 border-b-2 cursor-pointer' @click="$router.go(-1)">close</h2>
    <div class='border-gray-800 w-full text-center'>
      <div class='text-center self-start'>X</div>
      No products in the cart.</div>
    <p class='border-2 border-gray-500 border-opacity-50 w-full text-center h-14 align-middle m-5 md:h-7 self-end cursor-pointer' @click="$router.go(-1)">Continue shopping</p>
  </div>
</div> -->


<body class="bg-gray-100 mt-20">
  <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-3/5 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">3 Items</h2>
        </div>
                  <div v-if="carts" class="relative m-10">
                    <div class='w-full flex h-24 border-gray-300' v-for='product in carts' :key='product.id'>
                    <img class="w-20 h-20 " :src="product.img">
                    <button class="detail" @click="deletes(product.id)"></button>
                    <div class="w-full p-2">
                        <h1 class=" mb-3 text-left ml-2">{{product.name}}</h1>
                        <div class="flex ml-2 w-full justify-between">
                            <div class="flex ">
                                <p class="text-sm mr-2">Qty</p>
                                <button @click='inc1(product.id,product.number)' class="text-xs mx-1">◀</button>
                                <input class="w-6 text-sm text-center" 
                                        type="text"
                                        v-model.number="value" 
                                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                        @change="quantity"
                                >
                                <button @click='add1(product.id,product.number)' class="text-xs mx-1">▶</button>
                            </div>
                            <p class="text-sm">{{product.number * product.price}}</p>
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
          

        
        <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10 " >
      
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
      </div>

      <div id="summary" class="w-2/5 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">Items 3</span>
          <span class="font-semibold text-sm">590$</span>
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
            <span>$600</span>
          </div>
          <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
  </div>
</body>


</template>
<script>


export default {
  name: 'Cart',
  props: {
    id: Number
  },
   data(){
      return{
          carts:null,
          value: 1,
          newPrice: ''
      }
  },
  computed:{
      addTotal(){
        //this.carts.reduce() or for(){ return xx} or for of xx {}
          // return this.newPrice = 
          
      }
  },
  methods:{
      closeModal(){
          this.$emit('close') //
      },
      add1(id,number){
      this.value = this.value +1
    //   console.log(id,number,this.value)
    //   fetch('http://localhost:3000/carts/' + id,{
    //       method: 'PATCH',
    //       body: JSON.stringify({
    //           number : this.value
    //       }),
    //       headers:{ "Content-Type" : 'application/json'}  
    //   })
    //     .then((res) => res.json())
    //     .then(data => this.carts = data)
    //     .catch(err => console.log(err.message))
      },
      inc1(){
      this.value = this.value -1
      },
      deletes(id){
        //   fetch('http://localhost:3000/carts/' + id,{
        //       method: 'DELETE'
    // })
    //   console.log(id)
    }
  },
    mounted(){ //get data
   
  }

}
</script>
<style>

.detail::before{
  content: "x";
  color:#EEEEEE;
  position: absolute;
  right: 10px;
    top: 15px
}
</style>