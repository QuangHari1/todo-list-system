<template>
  <div class="border-2 z-50 w-96 shadow-lg bg-white h-9/10 flex flex-col items-center border-gray-300 rounded-lg mt-8 absolute bottom-1 pt-2">
    <img src="../../../assets/img/atlassian.png" alt="atlassian" class="w-3/4 min-w-11 select-none px-0 pt-8 pb-4">
    <div class="flex flex-col items-center w-full font-apple">
      <span class="text-gray-800 text-center strong text-base font-semibold flex items-center">
        Email address verified
        <i class="fa-solid fa-circle-check px-1 text-xs text-green-600 mt-1"></i> 
      </span>
      <span class="text-gray-800 text-center strong text-xs font-semibold flex items-center">
        Finish setting up your account
      </span>
      <form class="flex flex-col items-center mt-4 w-full">
        <span class="font-apple text-xs w-3/4 text-left mb-1 font-medium text-gray-500">Email address</span>
        <span class="font-apple text-sm font-bold w-3/4 text-left ">vuquanghari3@gmail.com</span>
        <span class="font-apple text-xs w-3/4 text-left mb-1 mt-2 font-medium text-gray-500">Full name</span>
        <input type="text" placeholder="Enter full name" class="border-2 border-gray-300 rounded px-2 py-1 w-3/4 font-normal focus:outline-none focus:border-blue-500 placeholder-gray-700 text-sm placeholder-opacity-80 h-10">
        <span class="font-apple text-xs w-3/4 text-left mt-2 font-medium text-gray-500">Create Password</span>
        <div class="relative w-3/4">
          <input
            :type="showPassword1 ? 'text' : 'password'"
            placeholder="Create Password"
            class="border-2 border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:border-blue-500 placeholder-gray-700 placeholder-opacity-80 mt-2 h-10 text-sm"
          />
          <span 
            @click="togglePassword(1)" 
            class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-300" 
            style="margin-top: 4px;"
          >
            <i :class="showPassword1 ? 'fas fa-eye text-sm' : 'fas fa-eye-slash text-sm'" style="font-size: 1rem;"></i>
          </span>
        </div>
        <span class="font-apple text-xs w-3/4 text-left mt-2 font-medium text-gray-500">Confirm Password</span>
        <div class="relative w-3/4">
          <input
            :type="showPassword2 ? 'text' : 'password'"
            placeholder="Confirm Password"
            class="border-2 border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:border-blue-500 placeholder-gray-700 placeholder-opacity-80 mt-2 h-10 text-sm"
          />
          <span 
            @click="togglePassword(2)" 
            class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-300" 
            style="margin-top: 4px;"
          >
            <i :class="showPassword2 ? 'fas fa-eye text-sm' : 'fas fa-eye-slash text-sm'" style="font-size: 1rem;"></i>
          </span>
        </div>
        
        <div class="w-3/4 mt-2">
          <span class="text-center text-xs smaller-text">
            By signing up, I accept the Atlassian 
            <span class="text-[#2f66e6] hover:underline cursor-pointer">Cloud Terms of Service</span>
            and acknowledge the 
            <span class="text-[#2f66e6] hover:underline cursor-pointer">Privacy Policy</span>
          </span>
        </div>
        <button class="bg-[#2d66e6] text-white rounded px-4 py-1 mt-4 w-3/4 hover:bg-[#1c4cb8] h-10 font-medium">Continue</button>
      </form>
      
      <footer class="w-full flex flex-col items-center mt-4 space-y-2">
        <hr class="border-t-2 border-gray-300 w-3/4 mb-5">
        <img src="../../../assets/img/atlassian.png" alt="atlassian" class="max-h-6 select-none grayscale">
        <span class="text-center text-xs pt-4">One account for Jira, Confluence, Trello and 
          <span class="text-[#2f66e6] hover:underline cursor-pointer">more</span>.
        </span>
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
  name: 'Regisform',

  data() {
    return {
      showPassword1: false,
      showPassword2: false
    };
  },
  methods: {
    togglePassword(field: number) {
      if (field === 1) {
        this.showPassword1 = !this.showPassword1;
      } else if (field === 2) {
        this.showPassword2 = !this.showPassword2;
      }
    },
   
  }
});
</script>

<style scoped>
.smaller-text {
  font-size: 12px; /* Adjust the font size as needed */
}
</style>
