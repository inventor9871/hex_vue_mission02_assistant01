<template>
    <li>
        <label class="todoList_label">
        <input class="todoList_input" type="checkbox" value="true"  v-model="todo.status" />
        <span>{{ todo.content }} </span>
        </label>
        <a href="#" @click.prevent="handleRemoveTodo(todo.id)">
        <i class="fa fa-times" ></i>
        </a>
    </li>
</template>
<script setup>
const props = defineProps({
    todo: {
        type: Object,
        required: true,
    },
})

const emit = defineEmits(['remove-todo',])

const handleRemoveTodo = (id)=>{
    console.log(id)
    emit('remove-todo', id)
}

</script>