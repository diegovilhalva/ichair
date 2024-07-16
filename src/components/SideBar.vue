<template>
    <div class="sideBar">
        <a class="menu" :class="{active:active}">
            <i class="bi bi-menu-app-fill"  @click="toggleMenu"></i>
        </a>
        <ul class="sci" >
            <li v-for="sci in socials" :key="sci.id"><a href="#"><i :class="sci.icon"></i></a></li>
        </ul>
    </div>
    <SideMenu :active="active"/>
</template>
<script setup>
import { ref } from 'vue';
import SideMenu from './SideMenu.vue';


const socials = [
    { id: 1, icon: 'bi bi-meta' },
    { id: 2, icon: 'bi bi-twitter-x' },
    { id: 3, icon: 'bi bi-instagram' }
]

const active = ref(false)
const toggleMenu = () => {
    active.value = !active.value;
}
</script>
<style scoped>

.sideBar{
    position: fixed;
    width: 5%;
    min-height: 100vh;
    padding: 30px;
    background: var(--primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    transition: 1s;
    z-index:2000;
}

.menu{
    font-size: 1.6rem;
    color: #000;
    z-index: 2000;
    transition: ease 1s;
    cursor: pointer;
}

.menu.active{
    transform: rotateZ(180deg);
}

.sci{
    padding: 0;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap:25px;
}

.sci li {
    list-style: none;
}

.sci li a {
    font-size: 1.6rem;
    color:#000;
}
</style>