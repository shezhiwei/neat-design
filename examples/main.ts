import { createApp } from 'vue';
import App from './app.vue';
import neatDesign from 'neat-design';
const app = createApp(App);

app.use(neatDesign);
app.mount('#app');
