import { createApp } from 'vue';
import App from './App.vue';
import TodoList from './todolist.vue';

const app = createApp(App);
app.component('todo-list', TodoList);
app.mount('#app');
