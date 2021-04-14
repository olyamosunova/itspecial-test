<template>
    <section class="container">
        <FormFilter />

        <Loader v-if="!data" />
        <Table v-else />

        <UserInfo v-if="chosenUser" />
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import FormFilter from '@/components/form-filter/Form-filter.vue';
    import Table from '@/components/table/Table.vue';
    import Loader from '@/components/loader/Loader.vue';
    import UserInfo from '@/components/user-info/User-info.vue';

    export default Vue.extend({
        name: "Main",
        mounted() {
            this.$store.dispatch('getData');
        },
        computed: {
            data(): Array<object> {
                return this.$store.getters.data;
            },
            chosenUser(): object {
                return this.$store.getters.chosenUser;
            }
        },
        components: {
            Loader,
            FormFilter,
            Table,
            UserInfo
        },
    })
</script>

<style scoped>

</style>
