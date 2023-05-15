<template>
    <div>
      <h1>Todo List</h1>
      <form @submit.prevent="addTodo">
        <input v-model="newTodo" placeholder="Add new todo">
        <button>Add</button>
      </form>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo }}
          <button @click="removeTodo(index)">Remove</button>
        </li>
      </ul>
    </div>
  </template>

  <!-- muwgnwgh -->

  <script>
  export default {
    data() {
      return {
        todos: [],
        newTodo: '',
      };
    },
    methods: {
      addTodo() {
        this.todos.push(this.newTodo);
        this.newTodo = '';
      },
      removeTodo(index) {
        this.todos.splice(index, 1);
      },
    },
  };
  </script>