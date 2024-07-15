<template>
    <div class="border-2 z-50 w-96 shadow-lg bg-white h-3/4 flex flex-col items-center border-gray-300 rounded-lg mt-8 absolute bottom-8 pt-2">
      <img src="../../../assets/img/atlassian.png" alt="atlassian" class="w-3/4 min-w-11 select-none px-0 py-10">
      <div class="flex flex-col items-center w-full font-apple">
        <span class="text-gray-800 text-center strong text-lg font-semibold">Can't log in?</span>
        <div class="flex flex-col items-center mt-4 w-full">
          <span class="list-none text-sm mb-0 font-apple w-3/4">To complete your reset password, enter the code we've sent to:</span>
          <div class="w-3/4 text-left mt-2">
            <span class="font-apple font-bold">name@email.com</span>
          </div>
          <div class="flex justify-between w-4/5 mt-4">
            <input
              v-for="(digit, index) in code"
              :key="index"
              type="text"
              maxlength="1"
              class="code-input"
              @input="moveToNext($event, index)"
              @keydown.backspace="moveToPrev($event, index)"
              v-model="digit.value"
            />
          </div>
          <router-link to="/author/forgotform" class="bg-[#2d66e6] text-white rounded px-4 py-1 mt-4 w-3/4 hover:bg-[#1c4cb8] h-10 font-medium flex items-center justify-center">
            Verify
          </router-link>
        </div>
        <div class="flex items-center mt-4 mb-0 space-x-2">
          <span class="list-none text-[#2f66e6] text-sm hover:underline cursor-pointer mb-0">Didn't receive an email? Resend email</span>
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
  
  <script lang="ts">
  import { defineComponent, reactive } from 'vue';
  
  export default defineComponent({
    name: 'Register',
    setup() {
      const code = reactive([
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
      ]);
  
      const moveToNext = (event: Event, index: number) => {
        const input = event.target as HTMLInputElement;
        if (input.value.length > 1) {
          input.value = input.value.slice(0, 1);
        }
        code[index].value = input.value;
        if (input.value.length === 1 && index < code.length - 1) {
          const nextInput = input.nextElementSibling as HTMLInputElement;
          if (nextInput && nextInput.tagName === 'INPUT') {
            nextInput.focus();
          }
        }
      };
  
      const moveToPrev = (event: KeyboardEvent, index: number) => {
        const input = event.target as HTMLInputElement;
        if (input.value.length === 0 && event.key === 'Backspace') {
          const prevInput = input.previousElementSibling as HTMLInputElement;
          if (prevInput && prevInput.tagName === 'INPUT') {
            code[index].value = '';
            prevInput.focus();
            prevInput.value = '';
          }
        }
      };
  
      return {
        code,
        moveToNext,
        moveToPrev,
      };
    },
  });
  </script>
  
  <style scoped>
  .code-input {
    border: 2px solid #d1d5db;
    border-radius: 0.375rem;
    text-align: center;
    height: 3.5rem; /* 56px */
    width: 2.5rem; /* 40px */
    font-size: 20px;
    padding: 0.5rem;
  }
  
  .code-input:focus {
    border-color: #2d66e6; /* Same as button color */
  }
  
  .code-input::-webkit-inner-spin-button,
  .code-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  .code-input[type='number'] {
    -moz-appearance: textfield;
  }
  </style>
  