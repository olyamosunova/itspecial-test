<template>
    <div class="loader d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "Loader"
    })
</script>

<style scoped>
    .loader {
        flex-grow: 1;
        padding: 15px;
    }
</style>
