<template>
    <section class="container">
        <FormFilter />

        <Loader v-if="!data" />
        <Table v-else />
    </section>
</template>

<script>
    import FormFilter from "../form-filter/Form-filter";
    import Table from "../table/Table";
    import Loader from "../loader/Loader";

    export default {
        name: "Main",
        mounted() {
            this.$store.dispatch('getData');
        },
        computed: {
            data() {
                return this.$store.getters.data;
            }
        },
        components: {
            Loader,
            FormFilter,
            Table
        },
    }
</script>

<style scoped>

</style>
