<template>
    <div class="cart-btn-loader" :class="{active: scroll > 100}">
        <CartBtn/>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import CartBtn from './CartBtn.vue';

const scroll = ref(0)
onMounted(() => {
    window.addEventListener("scroll",() => {
        scroll.value = window.scrollY
    })
})

</script>
<style scoped>
.cart-btn-loader {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: var(--primary);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    cursor: pointer;
    transition: .5s;
}

.cart-btn-loader.active {
    visibility: visible;
    opacity: 1;
}

.cart-btn-loader:hover {
    background: #fe9400;
}
</style>