<template>
    <footer class="footer  text-white">
        <div class="container py-5">
            <div class="row">
                <div class="col-md-4 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Ichair</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="col-md-4 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-white">Home</a></li>
                        <li><a href="#" class="text-white">Products</a></li>
                        <li><a href="#" class="text-white">Services</a></li>
                        <li><a href="#" class="text-white">Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5 class="text-uppercase">Contact</h5>
                    <ul class="list-unstyled">
                        <li><i class="bi bi-telephone-fill"></i> +123 456 7890</li>
                        <li><i class="bi bi-envelope-fill"></i> info@ichair.com</li>
                        <li><i class="bi bi-geo-alt-fill"></i> 123 Main St, Anytown, USA</li>
                    </ul>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col text-center">
                    <p class="mb-0">&copy; 2024 Ichair. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
    background-color: var(--bg-color);
}
.footer a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s;
}

.footer a:hover {
    color: var(--primary);
}

.footer ul {
    padding-left: 0;
    list-style: none;
}
@media (max-width:635px) {
    .footer{
        padding-left: 15%;
    }
}
</style>