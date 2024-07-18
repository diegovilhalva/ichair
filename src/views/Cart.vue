<template>
    <div class="shoppingCart" v-if="cart.length > 0" >
        <div class="container">
            <div class="row">
                <div class="table-responsive">
                  <table class="shopCartTable table table-borderless align-middle">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Preview</th>
                            <th scope="col">Product</th>
                            <th scope="col">Color</th>
                            <th scope="col">Price</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                            <CartItem v-for="(item,index) in cart" :key="item.id" :item="item" :index="index"/>
                    </tbody>
                  </table>  
                </div>
            </div>
            <div class="row d-flex justify-content-between mt-5">
                <div class="col-lg-2 align-items-center">
                    <p class="itemCount">Total Items: {{ cart.length }}</p>
                </div>
                <div class="col-lg-10 d-flex justify-content-end">
                    <div class="payment">
                        Total: {{ total }}
                        <a href="#">Check Out <i class="bi bi-wallet-fill"></i></a>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    <div class="shoppingCart" v-else>
        <div class="container">
            <div class="row mt-5">
                <h1 class="text-center"> Your Cart is Empty</h1>
            </div>
        </div>
    </div>
</template>
<script setup>
import CartItem from '@/components/CartItem.vue';
import { inject, ref } from 'vue';

const cart = ref(inject('cart'))

const handleTotalPayment = () => {
    return cart.value
        .map(item => item.price * item.qty * (1 - item.discount))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        .toFixed(2);
};

const total = handleTotalPayment();
</script>
<style scoped>
.shoppingCart {
    position: relative;
    margin-bottom: 40px;
    min-height: 30vh;
}

.shoppingCart h1 {
    color: #fff;
}

.shopCartTable {
    margin-top: 50px;
    color: #fff;
    background: var(--bgColor);
    box-shadow: 0px 0 15px rgba(225, 225, 225, .2);
}

.shopCartTable thead tr {
    font-size: 1.3rem;
}

.shopCartTable thead tr th {
    background: transparent;
    color: #fff;
}

.itemCount {
    font-size: 1.3rem;
    color: #fff;
}

.payment {
    display: inline-flex;
    align-items: center;
    gap: 50px;
    font-size: 1.3rem;
    color: #fff;
}

.payment a {
    padding: 10px 20px;
    text-decoration: none;
    color: #fff;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--primary);
    box-shadow: 0px 0 15px rgba(225, 225, 225, .2);
}

@media (max-width: 1440px) {
    .shoppingCart {
        padding-left: 5%;
    }
}
</style>