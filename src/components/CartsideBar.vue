<template>
    <div  class="z-10 backdrop top-0 fixed bg-black bg-opacity-50 w-full h-full flex justify-end" @click.self="closeModal"> 
        <div class="modal flex flex-wrap sm:w-20 md:w-1/3 lg:w-1/4 h-full p-10 bg-gray-900 rounded-lg" 
            :class="{ car : theme == 'car'}"
            >
            <!-- use binding and props to custumize and deliever the part of component -->
            <div class="w-full relative" >
                
                <div class="w-full text-right" >
                    <button @click="closeModal">close</button>
                </div>
                <div v-if="carts" class="relative scroll">
                    <div class='w-full flex h-24 mt-5 border-t-2 pt-5 border-gray-700' v-for='(product,index) in carts' :key='product.id'>
                    <button class="detail absolute right-2" @click="removeHandler(index,product.id)">x</button>
                    <img class="w-15 h-15 " :src="product.img">
                    
                    <div class="w-full p-2 text-sm">
                        <h1 class=" mb-3  text-left ml-2">{{product.name}}</h1>
                        <div class="flex ml-2 w-full justify-between">
                            <div class="flex ">
                                <p class="mr-2">Qty</p>
                                <button @click='decrement(index,product.id)' :disabled='product.number < 2' class="text-xs">◀</button>
                                <input class="w-6 bg-gray-900 text-center" 
                                        type="text"
                                        v-model.number="product.number" >
                                        <!-- <div>{{product.id}}</div> -->
                                        
                                <button @click='increment(index,product.id)' class="text-xs">▶</button>
                                <!-- <router-link to="/cart">Cart</router-link> -->
                            </div>
                            <p class="">${{ product.number * product.price }}</p>
                            
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
            <div >
                    <div class="absolute border-t-2 border-b-2 h-12 flex bottom-20 w-full justify-between">
                        <p class="self-center text-sm">Subtotal: </p>
                        <p class="self-center text-sm">{{ totalPrice | showPrice}}</p>
                    </div>
                    
                    <button class="absolute left-0 bottom-9 border-2 h-8 w-full" @click="viewCart">View cart</button>
                    <button class="absolute left-0 -bottom-2 border-2 h-8 w-full" @click="viewBill">Checkout</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from './firebase'

export default {
  name: 'CartSideBar',
  props: {
    msg: String,
    theme: String,
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
        console.log(this.carts[index].number)
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
            // console.log(index)
         db.collection("cart").doc(id).delete().then(() => {
            //  console.log(index)
            this.carts.splice(index,1)
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    },
    viewCart(){
          this.$emit('close')
          this.$router.push('/cart') 
    },
    viewBill(){
          this.$emit('close')
          this.$router.push('/checkout') 
    }
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
            //  console.log(typeof this.carts.number)
              
        });
        // console.log(this.carts)
    },
    // mounted(){
    //     this.scroll = new BScroll('#cart',{
      
    // })
    // }

}
</script>
<style>
.backdrop{
    z-index: 30;
}
.modal.car{
    /* background-color: crison; */
    color:#EEEEEE;
}
.scroll{
    height: 500px;
    overflow: hidden;
    overflow-y: scroll;
    /* padding-left: 20px; */
    /* margin-left: 20px; */
}
/* .detail::before{
  content: "x";
  border: #EEEEEE;
  color:#EEEEEE;
  position: absolute;
  right: 10px;
  top: 15px
} */
</style>