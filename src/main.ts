import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style.css'
import 'ant-design-vue/dist/reset.css'

// Import Ant Design Vue components
import Antd from 'ant-design-vue';

const app = createApp(App);

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Charlie+Text:wght@400;700&display=swap';
link.rel = 'stylesheet';

// Append the link element to the head
document.head.appendChild(link);
// Use Ant Design Vue components
app.use(Antd);
app.use(router);
app.mount('#app');


// Append the apple-system font to the head
const appleSystemLink = document.createElement('style');
appleSystemLink.innerHTML = `
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
`;
document.head.appendChild(appleSystemLink);
