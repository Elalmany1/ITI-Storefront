import {createApp,reactive} from 'vue'; import router from './router'; import App from './App.vue'; import './styles/base.css';
const cart=JSON.parse(localStorage.getItem('vora-cart')||'[]'); export const store=reactive({cart});
export function saveCart(){localStorage.setItem('vora-cart',JSON.stringify(store.cart));}
createApp(App).use(router).mount('#app');
