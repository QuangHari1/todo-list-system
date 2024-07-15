<template>
    <div class="border-2 z-50 w-96 shadow-lg bg-white h-4/5 flex flex-col items-center border-gray-300 rounded-lg mt-8 absolute bottom-8 pt-2">
      <img src="../../assets/img/atlassian.png" alt="atlassian" class="w-3/4 min-w-11 select-none px-0 py-10">
      <div class="flex flex-col items-center w-full font-apple">
        <span class="text-gray-800 text-center strong text-lg font-semibold">Log in to continue</span>
        <div class="flex flex-col items-center mt-4 w-full">
          <input type="text" placeholder="Enter your email" class="border-2 border-gray-300 rounded px-2 py-1 w-3/4 font-normal focus:outline-none focus:border-blue-500 placeholder-gray-700 text-sm placeholder-opacity-80 h-10" />
          
          <div class="relative w-3/4">
            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter Password"
              class="border-2 border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:border-blue-500 placeholder-gray-700 placeholder-opacity-80 mt-2 h-10 text-sm"
            />
            <span 
              @click="togglePassword" 
              class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-300" 
              style="margin-top: 4px;"
            >
              <i :class="showPassword ? 'fas fa-eye text-sm' : 'fas fa-eye-slash text-sm'" style="font-size: 1rem;"></i>
            </span>
          </div>


          <RouterLink to="/mainpage" class="bg-[#2d66e6] text-white rounded px-4 py-1 mt-4 w-3/4 hover:bg-[#1c4cb8] h-10 font-medium flex items-center justify-center">
            Continue
          </RouterLink>
        </div>
        <div class="flex items-center mt-4 space-x-2">
          <li @click="goToForgot" class="list-none text-[#2f66e6] text-sm hover:underline cursor-pointer">Can't log in?</li>
          <span class="text-l leading-none">•</span>
          <li @click="goToRegister" class="list-none text-[#2f66e6] text-sm hover:underline cursor-pointer">Create an account</li>
        </div>
        <footer class="w-full flex flex-col items-center mt-8 space-y-2">
          <hr class="border-t-2 border-gray-300 w-3/4 mb-5">
          <img src="../../assets/img/atlassian.png" alt="atlassian" class="max-h-6 select-none grayscale">
          <span class="text-center text-xs pt-4">One account for Jira, Confluence, Trello and 
            <span class="text-[#2f66e6] hover:underline cursor-pointer">more</span>.
          </span>
          <ul class="flex items-center justify-center space-x-2">
            <li class="list-none text-xs hover:underline cursor-pointer">Privacy Policy</li>
            <span class="text-l leading-none">•</span>
            <li class="list-none text-xs hover:underline cursor-pointer">User Notice</li>
          </ul>
          <div class="flex flex-col items-center ">
            <span class="text-center text-xs leading-3 pt-0">This site is protected by reCAPTCHA and the Google  
              <span class="text-[#2f66e6] hover:underline cursor-pointer">Privacy</span>.
            </span>
            <span class="text-center text-xs p-0">
              <span class="text-[#2f66e6] hover:underline cursor-pointer">Policy</span>
              and <span class="text-[#2f66e6] hover:underline cursor-pointer">Term of Service</span> apply
            </span>
          </div>
        </footer>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';
export default defineComponent({
  name: 'Login',

  data() {
    return {
      showPassword: false
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    goToRegister() {
      this.$router.push('/author/register');
    },
    goToForgot() {
      this.$router.push('/author/forgot');
    }
  }
});
</script>

<style>
/* Add any additional styles if needed */
</style>



