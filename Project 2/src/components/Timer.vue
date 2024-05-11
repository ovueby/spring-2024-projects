<script setup>
import { watch, ref, onMounted } from 'vue'

let timerCount = ref(30)
let timerInterval = false;

function setClearableInterval(proc, time) {
    var thisInterval = setInterval(() => {
        proc(function() { clearInterval(thisInterval) })
    }, time)
}
function retime() {
    timerCount.value = 30;
    clearInterval(timerInterval)
    timerInterval = setClearableInterval((clear) => {
        if(timerCount.value > 0) {
            timerCount.value--
        } else {
            clear()
        }
    }, 1000)
}

onMounted(retime)
</script>

<template>
    <div>h {{ timerCount }}</div>
    <button @click="retime">Reset</button>
</template>