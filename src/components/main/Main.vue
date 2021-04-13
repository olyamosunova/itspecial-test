<template>
    <section class="container">
        <FormFilter />

        <Loader v-if="!data" />
        <Table v-else />

        <UserInfo v-if="chosenUser" />
    </section>
</template>

<script>
    import FormFilter from "../form-filter/Form-filter";
    import Table from "../table/Table";
    import Loader from "../loader/Loader";
    import UserInfo from "../user-info/User-info";

    export default {
        name: "Main",
        mounted() {
            this.$store.dispatch('getData');
        },
        computed: {
            data() {
                return this.$store.getters.data;
            },
            chosenUser() {
                return this.$store.getters.chosenUser;
            }
        },
        components: {
            Loader,
            FormFilter,
            Table,
            UserInfo
        },
    }
</script>

<style scoped>

</style>
