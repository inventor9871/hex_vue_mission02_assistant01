<script setup lang="ts">
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';
import { ref } from 'vue';
import { useTodoStore } from '@/store/todoStore.js'
import { signout } from '@/utils/api';
import router from '@/router';
const todoStore = useTodoStore();



const todos = ref([
  { id:1, content: "把冰箱發霉的檸檬拿去丟", status: false },
  { id:2, content: "打電話叫媽媽匯款給我", status: true },
])

const addTodo = (content)=>{
  if(content.trim() !==''){
    todos.value.push({
      id: Date.now(),
      content,
      status: false,
    })
  }
}

const removeTodo = (id)=>{
  todos.value = todos.value.filter( (t)=>t.id !== id )
}

const handleSignout = async()=>{
  try {
    const res = await signout()
    alert(res.data.message)
    document.cookie = `vue3-todolist-token='';max-age=0;  `;
    router.push('/register');
  } catch (error) {
    alert(error.response.data.message)
  }
}

</script>

<template>
    <div id="todoListPage" class="bg-half">
  <nav>
    <h1><a href="#">ONLINE TODO LIST</a></h1>
    <ul>
      <li class="todo_sm">
        <RouterLink to="/todolist">{{ todoStore.nick }} 的代辦</RouterLink>
       
      </li>
      <li>
        <!-- <a href="/#" >登出</a> -->
        <a href="/#" @click.prevent="handleSignout">登出</a>
      </li>
    </ul>
  </nav>
  <div class="conatiner todoListPage vhContainer">
    <div class="todoList_Content">
      <TodoForm 
      @add-todo="addTodo"/>
      <TodoList v-if="todos.length"
      :todos="todos"
      @remove-todo="removeTodo" />
      <p v-else style="text-align: center;">尚無代辦事項</p>
    </div>
  </div>
</div>
</template>