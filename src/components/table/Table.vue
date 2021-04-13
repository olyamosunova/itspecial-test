<template>
    <div class="overflow-auto">
        <b-table
                class="mt-5 mb-5"
                striped hover
                :items="data"
                :fields="fields"
                :per-page="perPage"
                :current-page="currentPage"
                show-empty>
            <template #cell(adress)="fields">
                {{ fields.item.adress.city }},
                {{ fields.item.adress.streetAddress }},
                {{ fields.item.adress.zip }},
                {{ fields.item.adress.state }}
            </template>

            <template #empty="scope">
                <h4>{{ scope.emptyText }}</h4>
            </template>
        </b-table>
        <b-pagination
                class="justify-content-sm-end"
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
        ></b-pagination>
    </div>

</template>

<script>
    export default {
        name: "Table",
        data() {
            return {
                perPage: 25,
                currentPage: 1,
                fields: [
                    {
                        key: 'firstName',
                        sortable: true
                    },
                    {
                        key: 'lastName',
                        sortable: true
                    },
                    {
                        key: 'adress',
                        label: 'Address',
                        sortable: true
                    },
                    {
                        key: 'email',
                        sortable: false
                    },
                    {
                        key: 'phone',
                        sortable: false
                    },
                    {
                        key: 'description',
                        sortable: false
                    }
                ],
            }
        },
        computed: {
            data() {
                return this.$store.getters.data;
            },
            rows() {
                return this.data.length
            }
        },
    }
</script>
