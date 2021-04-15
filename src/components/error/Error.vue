<template>
    <div class="error">
        <div class="error__container">
            <p class="error__text">{{error}}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import './Error.scss';

    export default Vue.extend({
        name: "Error",
        props: {
            error: Array
        }
    });
</script>
