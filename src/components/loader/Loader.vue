<template>
    <div class="loader">
        <img :src="spinner" alt="Loading..."/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import spinner from '@/assets/spinner.gif';

    export default Vue.extend({
        name: "Loader",
        data() {
            return {
                spinner
            }
        }
    })
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
