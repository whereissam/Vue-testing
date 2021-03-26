<template>
    <div class='card w-1/4 m-auto flex flex-col flex-wrap border-2 justify-center mt-28'>
  <h1 class='flex justify-center mt-5 text-xl'>Register</h1>
  
  <form @submit.prevent="handleSubmit" class='p-5 mt-1' id="myForm" >
   
    <label for="user" class='text-xs self-start'>Email address*</label><br />
    <input type="email" v-model='formData.email' required id='user' class='border-2 w-full mt-1 mb-5'><br />
    
    <label for="password" class='text-xs'>Password*</label><br />
    <input type="password" required v-model='formData.password' id='password' class='border-2 w-full mt-1 mb-1'><br />
    <div v-if="passwordError" class="text-red-700 text-lg">{{passwordError}}</div> 
    <!-- check passwordError -->
    
    
   
    <button class='w-full text-sm border-2 mt-16 mb-3 p-1'>Register</button>
    <div class='w-full text-xs text-center'>-------------- or --------------</div>
    <router-link to="/sign">
        <button class='border-2 w-full mt-3 p-1 text-sm'>Sign In</button>
    </router-link> 
    
  </form>
</div>
<!-- <p>Your email {{email}}</p>
<p>Your password {{password}}</p>
<p>Your remember {{remember}}</p> -->
</template>

<script>
export default {
  name: 'Sign',
  data(){
    return{
      formData:{
         email: '',
          password:'',
          remember:'',
          
      },
     passwordError:'',
    }
  }, 
  props: {
    msg: String
  },
  methods:{
    handleSubmit(){ 
      this.passwordError = this.formData.password.length > 5 ? '' : "Password must be at least 6 chars long"
    //   if (!this.passwordError){
    //     fetch("http://localhost:3000/member", {
    //         method:'POST',
    //         body:JSON.stringify(this.formData),
    //         headers:{ "Content-Type" : 'application/json'} //without it, cannot transfer data to json-server
    //       })
    //       .then(res => {
    //         return res.json();   // 使用 json() 可以得到 json 物件
    //       }).then(result => {
    //           console.log(result); 
    //       }).catch(err => console.log(err.message))
    //   }
    }
    
  }
}
</script>