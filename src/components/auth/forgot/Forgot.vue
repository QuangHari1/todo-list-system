<template>
  
    <div class="border-2 z-50 w-96 shadow-lg bg-white h-2/3 flex flex-col items-center border-gray-300 rounded-lg mt-8 absolute bottom-8 pt-2">
      <img src="../../../assets/img/atlassian.png" alt="atlassian" class="w-3/4 min-w-11 select-none px-0 py-10">
      <div class="flex flex-col items-center w-full font-apple">
        <span class="text-gray-800 text-center strong text-lg font-semibold">Can't login?</span>
        <div class="flex flex-col items-center mt-4 w-full">
        <span class="font-apple text-xs w-3/4 text-left mb-1 mt-2 font-medium text-gray-500">We'll send a OTP to
        </span>
          <input type="text" placeholder="Enter your email" class="border-2 border-gray-300 rounded px-2 py-1 w-3/4 font-normal focus:outline-none focus:border-blue-500 placeholder-gray-700 text-sm placeholder-opacity-80 h-10">
    
          <router-link to="/author/validforgot" class="bg-[#2d66e6] text-white rounded px-4 py-1 mt-4 w-3/4 hover:bg-[#1c4cb8] h-10 font-medium flex items-center justify-center">
            Send OTP
          </router-link>
        </div>
        <div class="flex items-center mt-4 mb-0 space-x-2">
          <router-link to="/author/" class="list-none text-[#2f66e6] text-sm hover:underline cursor-pointer mb-0">
            Return to log in
          </router-link>        
        </div>
        <footer class="w-full flex flex-col items-center mt-4 space-y-2">
          <hr class="border-t-2 border-gray-300 w-3/4 mb-5">
          <img src="../../../assets/img/atlassian.png" alt="atlassian" class="max-h-6 select-none grayscale">
          <span class="text-center text-xs pt-4">One account for Jira, Confluence, Trello and 
            <span class="text-[#2f66e6] hover:underline cursor-pointer">more</span>.
          </span>
          <ul class="flex items-center justify-center space-x-2">
            <li class="list-none text-xs hover:underline cursor-pointer">Login help
            </li>
            <span class="text-l leading-none">•</span>
            <li class="list-none text-xs hover:underline cursor-pointer">Contact Support</li>
          </ul>
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
    name: 'Forgot',
  };
  </script>
  