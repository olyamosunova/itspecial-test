<template>
    <div class="loader text-center">
        <b-spinner variant="primary" label="Text Centered"></b-spinner>
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15px;
    }
</style>
