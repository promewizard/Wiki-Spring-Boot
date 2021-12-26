import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import * as Icons from '@ant-design/icons-vue';
import 'ant-design-vue/dist/antd.css';

//create application component
const app = createApp(App);

app.use(store).use(router).use(Antd).mount('#app');

//using all ant design icons globally
const icons: any = Icons;
for (const i in icons) {
    app.component(i, icons[i]);
}