<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import Timer from './components/Timer.vue'
</script>

<template>
  <header>
    <nav>
        <ul class="nav nav-pills nav-fill gap-2 p-2 m-4 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">
            <li class="nav-item" role="presentation">
                <RouterLink to="/" class="nav-link rounded-5" activeClass="active">Home</RouterLink>
            </li>
            <li class="nav-item" role="presentation">
                <RouterLink to="/about" class="nav-link rounded-5" activeClass="active">About</RouterLink>
            </li>
            <li class="nav-item" role="presentation">
                <RouterLink to="/skills" class="nav-link rounded-5" activeClass="active">Skills</RouterLink>
            </li>
            <li class="nav-item" role="presentation">
                <RouterLink to="/contact" class="nav-link rounded-5" activeClass="active">Contact</RouterLink>
            </li>
        </ul>
    </nav>
  </header>
  <main>
   <RouterView />
  </main>
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2024 <span class="sc">Sam Carr</span></span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a href="https://github.com/ovueby"><img src="../img/gh.svg" width="32" alt="GitHub"/></a></li>
    </ul>
  </footer>
</template>

<style scoped>
</style>
