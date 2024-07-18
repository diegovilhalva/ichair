<template>
    <section id="products" class="products">
        <div class="container">
            <div class="row">
                <h4 class="section-title">Products</h4>
            </div>
            <div class="row mt-4">
                <div class="col-xl-3 col-lg-4 col-md-6 mt-4 mb-3" v-for="(item) in items" :key="item.id">
                        <ItemCard :item="item"/>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { onMounted, ref } from 'vue';

    const items = ref([])
    import ItemCard from "@/components/ItemCard.vue"

    onMounted(()=> {
        fetch('http://localhost:4000/items')
        .then(res => res.json())
        .then(data => items.value = data)
        .catch(err => console.log(err.message))
    })
</script>   
<style scoped>
.products {
    background: #1e1e1e !important;
    margin-bottom: 1rem;
}
</style>