import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore('todoStore', ()=>{
    const nick = ref('')

    return {
        nick,
    }
})