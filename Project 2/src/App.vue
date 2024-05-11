<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import Timer from './components/Timer.vue'
</script>

<template>
    <nav>
        <ul class="nav nav-pills nav-fill gap-2 p-2 m-4 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">
            <li class="nav-item" role="presentation">
                <RouterLink to="/" class="nav-link rounded-5" activeClass="active">Home</RouterLink>
            </li>
            <li class="nav-item" role="presentation">
                <RouterLink to="/timer" class="nav-link rounded-5" activeClass="active">Timer</RouterLink>
            </li>
        </ul>
    </nav>
     <RouterView />
</template>

<style scoped>
</style>
