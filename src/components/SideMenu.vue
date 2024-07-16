<template>
    <div class="side-menu" :class="{ active: active }">
        <Nav/>
    </div>
</template>
<script setup>

import Nav from './Nav.vue';

const props = defineProps({
    active: {
        type: Boolean,
        required: true
    }
})
</script>
<style>
.side-menu {
    position: fixed;
    left: -300px;
    width: 300px;
    height: 100%;
    padding: 30px;
    background: var(--primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    transition: 1s;
    z-index: 1000;
}

.side-menu.active {
    left: 0;
}

.side-menu .nav {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
}

.side-menu .nav li {
    list-style: none;
    margin: 0 10px;
}

.side-menu .nav li a {
    color: #000;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 2px;
    cursor: pointer;
    transition: 0.3s;

}

.side-menu .nav li:hover a,
.side-menu .nav li a.active {
    color: var(--third);
}
</style>