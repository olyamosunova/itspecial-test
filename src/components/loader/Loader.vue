<template>
    <div class="loader d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Loader"
    }
</script>

<style scoped>
    .loader {
        flex-grow: 1;
        padding: 15px;
    }
</style>
