<template>
    <div class="inputBox">
        <input type="text" placeholder="請輸入待辦事項" v-model="newTodo">
        <a href="#" @click.prevent="handleAddTodo">
          <i class="fa fa-plus"></i>
        </a>
      </div>
</template>
<script setup>
import { ref } from 'vue'

const newTodo = ref('')
const emit = defineEmits(['add-todo', ])
const handleAddTodo = ()=>{
  emit('add-todo', newTodo.value)
  newTodo.value = ''
}
</script>