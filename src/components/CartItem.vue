<template>
    <tr class="shopCartItem">
        <th class="">
            {{ index + 1 }}
        </th>
        <td>
            <img :src="item.imgUrl" class="img-fluid" alt="">
        </td>
        <td>
            <RouterLink :to="`/products/${item.id}`">{{item.name}}</RouterLink>
        </td>
        <td :style="{color:item.color}">
            <i class="bi bi-record-fill"></i>
        </td>
        <td>${{item.price.toFixed(2)}}</td>
        <td>
            {{item.qty}}
        </td>
        <td>
            {{item.discount > 0 ? `${item.discount * 100}%` : 0}}
        </td>
        <td>
            ${{ (item.price * item.qty * (1 - item.discount)).toFixed(2) }}
        </td>
        <td>
            <a href="#" @click.stop.prevent="handleRemoveFromCart(item)">
                <i class="bi bi-trash"></i>
            </a>
        </td>
    </tr>
</template>
<script setup>
import { inject, ref } from 'vue';


    const cart = ref(inject('cart'))
    const props = defineProps({
        item:{
            type:Object,
            required:true
        },
        index:{
            type:Number,
            required:true
        }
    })

    const handleRemoveFromCart = (target) => {
        let index  = cart.value.indexOf(target)
        cart.value.splice(index,1)
    }
</script>
<style scoped>
.shopCartItem {
    margin-bottom: 20%;
}

.shopCartItem tr {
    margin-bottom: 20px !important;
}

.shopCartItem td,
.shopCartItem th {
    background: transparent;
    color: #fff;
    font-size: 1.2rem;
}

.shopCartItem a {
    color: #fff;
    font-size: 1.6rem;
}

.shopCartItem img {
    width: 120px;
    height: 70px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
}

.shopCartItem i {
    font-size: 2rem;
}
</style>