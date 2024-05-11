<script setup>
import { watch, ref, onMounted } from 'vue'

let timerCount = ref(30)
let paused = false
let timerInterval = false;

function pause() {
  if(paused) paused = false
  else paused = true
}

function setClearableInterval(proc, time) {
    var thisInterval = setInterval(() => {
        proc(function() { clearInterval(thisInterval) })
    }, time)
}

timerInterval = setClearableInterval((clear) => {
    if(timerCount.value > 0 && !paused) {
        timerCount.value--
    }
}, 1000)

function retime() {
    timerCount.value = 30;
    if(timerInterval !== false) {
      clearInterval(timerInterval)
    }
}

onMounted(retime)
</script>

<template>
    <div class="container text-center">
      <div class="fs-1">{{ timerCount }}</div>
      <div class="btn-group" role="group" aria-label="Basic button group">
        <button @click="pause" type="button" class="btn btn-primary">Pause</button>
        <button @click="retime" type="button" class="btn btn-secondary">Reset</button>
      </div>
    </div>
</template>
