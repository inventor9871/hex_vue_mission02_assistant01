<script setup lang="ts">
import { computed, ref } from 'vue';
import TodoItem from './TodoItem.vue';

const props = defineProps({
    todos: {
        type: Array,
        required: true,
    }
})

const emit = defineEmits(['remove-todo', ])

const filterStatus = ref('all')

const filterTodos = computed( ()=>{
  switch (filterStatus.value) {
    case 'incomplete':
      return props.todos.filter((t)=> !t.status)
    case 'completed':
      return props.todos.filter((t)=> t.status)
    default:
      return props.todos
  }
})

const incompleteTodos = computed(()=> props.todos.filter((t)=> !t.status))

</script>

<template>
    <div class="todoList_list">
        <ul class="todoList_tab">
          <li><a href="#" :class="{active: filterStatus === 'all'}" @click.prevent="filterStatus = 'all'">全部</a></li>
          <li><a href="#" :class="{active: filterStatus === 'incomplete'}"   @click.prevent="filterStatus = 'incomplete'">待完成</a></li>
          <li><a href="#" :class="{active: filterStatus === 'completed'}"   @click.prevent="filterStatus = 'completed'">已完成</a></li>
        </ul>
        <div class="todoList_items">
          <ul class="todoList_item">
            <TodoItem v-for="todo in filterTodos" :key="todo.id"
              :todo="todo"
              @remove-todo="emit('remove-todo', $event)" >
          </TodoItem>
          </ul>
          <div class="todoList_statistics">
            <p> {{ incompleteTodos.length }} 個未完成項目</p>
          </div>
        </div>
      </div>
</template>