<template>
  
    <div class="border-2 z-50 w-96 shadow-lg bg-white h-3/4 flex flex-col items-center border-gray-300 rounded-lg mt-8 absolute bottom-8 pt-2">
      <img src="../../../assets/img/atlassian.png" alt="atlassian" class="w-3/4 min-w-11 select-none px-0 py-10">
      <div class="flex flex-col items-center w-full font-apple">
        <span class="text-gray-800 text-center strong text-lg font-semibold">Sign up to continue</span>
        <div class="flex flex-col items-center mt-4 w-full">
          <input type="text" placeholder="Enter your email" class="border-2 border-gray-300 rounded px-2 py-1 w-3/4 font-normal focus:outline-none focus:border-blue-500 placeholder-gray-700 text-sm placeholder-opacity-80 h-10">
          <div class="w-3/4 mt-2">
            <span class="text-center smaller-text">
              By signing up, I accept the Atlassian 
              <span class="text-[#2f66e6] hover:underline cursor-pointer">Cloud Terms of Service</span>
              and acknowledge the 
              <span class="text-[#2f66e6] hover:underline cursor-pointer">Privacy Policy</span>
            </span>
          </div>
          <router-link to="/author/validate" class="bg-[#2d66e6] text-white rounded px-4 py-1 mt-4 w-3/4 hover:bg-[#1c4cb8] h-10 font-medium flex items-center justify-center">
            Sign up
          </router-link>
        </div>
        <div class="flex items-center mt-4 mb-0 space-x-2">
          <router-link to="/author/" class="list-none text-[#2f66e6] text-sm hover:underline cursor-pointer mb-0">
            Already have an Atlassian account? Log in
          </router-link>        
        </div>
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
  
  <style scoped>
  .smaller-text {
    font-size: 12px; /* Adjust the font size as needed */
  }
  </style>
  
  <script>
  export default {
    name: 'Register',
  };
  </script>
  