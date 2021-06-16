<template>
  <div class="flex justify-center nowrap">
    <div class="py-12 mt-20">
      <div class="max-w-md bg-white shadow-lg rounded-lg md:max-w-xl mx-2">
        <div class="md:flex ">
          <div class="w-full p-4 px-5 py-5">
            <div class="flex flex-row mb-5">
              <h2 class="text-3xl font-semibold">Billing details</h2>
            </div>
            <!-- <div class="flex flex-row pt-2 text-xs pt-6 pb-5"> <span class="font-bold">Information</span> <small class="text-gray-400 ml-1">></small> <span class="text-gray-400 ml-1">Shopping</span> <small class="text-gray-400 ml-1">></small> <span class="text-gray-400 ml-1">Payment</span> </div> <span>Customer Information</span> -->
            <div class="relative pb-5">
              <input
                type="text"
                name="mail"
                class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="E-mail"
              />
            </div>
            <span>Shipping Address</span>
            <div class="grid md:grid-cols-2 md:gap-2">
              <input
                type="text"
                name="mail"
                class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="First name*"
              />
              <input
                type="text"
                name="mail"
                class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="Last name*"
              />
            </div>
            <input
              type="text"
              name="mail"
              class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
              placeholder="Company (optional)"
            />
            <input
              type="text"
              name="mail"
              class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
              placeholder="Address*"
            />
            <input
              type="text"
              name="mail"
              class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
              placeholder="Apartment, suite, etc. (optional)"
            />
            <div class="grid md:grid-cols-3 md:gap-2">
              <input
                type="text"
                name="mail"
                class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="Zipcode*"
              />
              <input
                type="text"
                name="mail"
                class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="City*"
              />
              <input
                type="text"
                name="mail"
                class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="State*"
              />
            </div>
            <input
              type="text"
              name="mail"
              class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
              placeholder="Country*"
            />
            <input
              type="text"
              name="mail"
              class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
              placeholder="Phone Number*"
            />
            <div class="flex justify-between items-center pt-2">
              <button
                type="button"
                class="h-12 w-24 text-blue-500 text-xs font-medium"
                @click="productView"
              >
                Return to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-12 mt-20 ml-10">
      <div class="max-w-md bg-white shadow-lg rounded-lg md:max-w-xl mx-2">
        <div class="md:flex ">
          <div class="w-full p-4 px-5 py-5">
            <div class="flex flex-row mt-3">
              <h1 class="text-lg pb-8">Your order</h1>
            </div>
            <div class="carts">
              <div v-if="carts">
              <div
                class="w-full flex border-gray-300 border-b-2 mb-2 pb-2"
                v-for="product in carts"
                :key="product.id"
              >
                <img class="w-12 h-12 " :src="product.img" />
                <div class="w-full text-sm">
                  <div class="flex w-full justify-between">
                    <h1 class=" mb-3 text-left ml-2">{{ product.name }}</h1>
                    <p class="">${{ product.number * product.price }}</p>
                  </div>
                  <p class="text-left ml-3">x{{ product.number }}</p>
                </div>
              </div>
            </div>
            </div>
            
            <div class="mt-5">
              <label class="mb-3 text-sm uppercase text-left">Shipping</label>
              <select
                v-model="selected"
                class="block p-2 text-gray-600 w-full text-sm"
              >
                <option>Standard shipping - $10.00</option>
                <option>Express shipping - $25.00</option>
              </select>
            </div>
            <div class="pt-5">
              <label
                for="promo"
                class="font-semibold inline-block mb-3 text-sm uppercase"
                >Promo Code</label
              >
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                class="text-sm w-full"
              />
            </div>
            <button
              class="bg-red-500 hover:bg-red-600 px-5 text-sm text-white uppercase"
            >
              Apply
            </button>
            <div class="border-t mt-8">
              <div
                class="flex font-semibold justify-between py-6 text-sm uppercase"
              >
                <span>Total cost</span>
                <span>${{ totalPrice + 10 }}</span>
              </div>
              <button
                class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                @click="viewBill"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../components/firebase";
export default {
  props: {
    id: Number,
  },
  data() {
    return {
      carts: [],
      selected: "",
    };
  },
  methods:{
      productView(){
          this.$router.push("/products")
      }
  },
  filters: {
    showPrice(price) {
      return "$" + price.toFixed(2);
    },
  },
  computed: {
    totalPrice() {
      return this.carts.reduce((prevValue, product) => {
        return prevValue + product.price * product.number;
      }, 0);
    },
  },
  created() {
    db.collection("cart")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            name: doc.data().name,
            number: doc.data().number,
            price: doc.data().price,
            img: doc.data().img,
          };
          this.carts.push(data);
        });
      });
  },
};
</script>

<style>
.carts{
    height: 250px;
    overflow-y: scroll;
}
</style>
