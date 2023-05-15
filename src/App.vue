<template>
  <div>
    <todo-list></todo-list>
  </div>

  <RouterView />
</template>

<script>
import TodoList from './todolist.vue';

export default {
  components: {
    TodoList,
  },
};
</script>