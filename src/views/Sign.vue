<template>
    <div class='card w-1/4 m-auto flex flex-col flex-wrap border-2 justify-center mt-28'>
  <h1 class='flex justify-center mt-5 text-xl'>Sign in</h1>
  
  <form @submit.prevent="handleSubmit" class='p-5 mt-1' id="myForm" >
   
    <label for="user" class='text-xs self-start'>Username or email address*</label><br />
    <input type="email" v-model='formData.email' required id='user' class='border-2 w-full mt-1 mb-5'><br />
    
    <label for="password" class='text-xs'>Password*</label><br />
    <input type="password" required v-model='formData.password' id='password' class='border-2 w-full mt-1 mb-1'><br />
    <div v-if="passwordError" class="text-red-700 text-lg">{{passwordError}}</div> 
    <!-- check passwordError -->
    
    <div class='flex justify-between items-center w-full flex-wrap xl:flex-nowrap mt-5'>
      
      <div class='flex flex-start'>
        <input type="checkbox" id='remember' v-model="formData.remember">
        <label for="remember" class='text-xs'>Remember me</label>
      </div>
      <a href="#" class='text-xs'>Lost your password?</a>
      <br />
    </div>
   
    <div class="buttons">
     
    </div>
   
    <button class='w-full text-sm border-2 mt-3 mb-3 p-1'>Sign in</button> 
    <div class='w-full text-xs text-center'>-------------- or --------------</div>
     <router-link to="/create">
        <button class='border-2 w-full mt-3 p-1 text-sm'>Create an account</button>
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