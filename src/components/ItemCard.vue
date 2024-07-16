<template>
    <div class="card">
        <div class="card-bg" :style="{background:item.bgColor}"></div>
    </div>
</template>
<script setup>
const props = defineProps({
    item:{
        type:Object,
        required:true,
    }
})
</script>
<style scoped>

</style>