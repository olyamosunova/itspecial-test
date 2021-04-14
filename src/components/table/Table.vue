<template>
    <div>
        <div class="overflow-auto mt-5 mb-5">
            <table class="table table-hover">
                <thead class="thead-light">
                <tr>
                    <FieldTitle v-for="field in fields" :key="field.key" :field="field" />
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="item in data.slice(perPage * (currentPage - 1), perPage * currentPage)"
                    :key="item.id + item.firstName"
                    @click="onClickChooseUser(item.id)"
                >
                    <td>{{item.id}}</td>
                    <td>{{item.firstName}}</td>
                    <td>{{item.lastName}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.email}}</td>
                </tr>
                <tr>
                    <td v-if="!data.length" colspan="6">No results were found for your search.</td>
                </tr>
                </tbody>
            </table>
        </div>
        <Pagination
                v-if="pages.length > 1"
                :pages="pages"
                @onClickChangePage="onClickChangePage" />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import FieldTitle from '@/components/field-title/Field-title.vue';
    import Pagination from '@/components/pagination/Pagination.vue';

    export default Vue.extend({
        name: "Table",
        data() {
            return {
                fields: [
                    {
                        key: 'id',
                        label: 'ID',
                        sortable: true
                    },
                    {
                        key: 'firstName',
                        label: 'First Name',
                        sortable: true
                    },
                    {
                        key: 'lastName',
                        label: 'Last Name',
                        sortable: true
                    },
                    {
                        key: 'phone',
                        label: 'Phone',
                        sortable: false
                    },
                    {
                        key: 'email',
                        label: 'Email',
                        sortable: false
                    }
                ] as Array<object>
            }
        },
        computed: {
            data(): Array<object> {
                return this.$store.getters.data;
            },
            perPage(): number {
                return this.$store.getters.perPage;
            },
            currentPage(): number {
                return this.$store.getters.currentPage;
            },
            pagesCount(): number {
                const length = this.data.length;

                let count = length / this.perPage;

                if (length % this.perPage) {
                    count += 1;
                }

                return count;
            },
            pages(): Array<number> {
                const pages = [];

                for (let i = 1; i <= this.pagesCount; i++) {
                    pages.push(i);
                }

                return pages;
            },
        },
        methods: {
          onClickChangePage({type, page}: any): void {
              switch (type) {
                  case `prev`:
                      this.$store.dispatch('changeCurrentPage', this.currentPage - 1);
                      break;

                  case 'next':
                      this.$store.dispatch('changeCurrentPage', this.currentPage + 1);
                      break;

                  case 'first':
                      this.$store.dispatch('changeCurrentPage', 1);
                      break;

                  case 'last':
                      this.$store.dispatch('changeCurrentPage', Math.trunc(this.pagesCount));
                      break;

                  default:
                      this.$store.dispatch('changeCurrentPage', page);
                      break;
              }
          },
            onClickChooseUser(userId: number) {
              this.$store.dispatch('getChosenUser', userId);

              setTimeout(() => {
                  window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: 'smooth'
                  });
              }, 100);
            },
        },
        components: {
            FieldTitle,
            Pagination
        }
    })
</script>

<style lang="scss">
    .table thead th {
        vertical-align: middle;
    }

    th.sort {
        cursor: pointer;
    }

    tbody tr {
        cursor: pointer;
    }
</style>
