<template>
    <div>
        <div class="overflow-auto mt-5 mb-5">
            <table class="table">
                <thead class="thead-light">
                <tr>
                    <th
                        :class="{sort: field.sortable}"
                        scope="col" v-for="field in fields"
                        :key="field.key">
                        {{ field.label }}
                        <span
                            v-if="field.sortable"
                            :class="{
                                'sort-icon': true,
                                'sort-icon--up': false,
                                'sort-icon--down': false
                                }"></span>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr
                        v-for="(item, idx) in data.slice(perPage * (currentPage - 1), perPage * currentPage)"
                        :key="item.id + item.firstName"
                        @click="onClickChooseUser(item.id)"
                >
                    <td>{{idx + 1}}</td>
                    <td :aria-label="perPage * (currentPage - 1) + ',' + perPage * currentPage">{{item.firstName}}</td>
                    <td>{{item.lastName}}</td>
                    <td>{{item.adress.city}}, {{item.adress.streetAddress}}, {{item.adress.zip}}, {{item.adress.state}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.description}}</td>
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

<script>
    import Pagination from "../pagination/Pagination";

    export default {
        name: "Table",
        data() {
            return {
                fields: [
                    {
                        key: 'idx',
                        label: 'idx',
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
                        key: 'adress',
                        label: 'Address',
                        sortable: true
                    },
                    {
                        key: 'email',
                        label: 'Email',
                        sortable: false
                    },
                    {
                        key: 'phone',
                        label: 'Phone',
                        sortable: false
                    },
                    {
                        key: 'description',
                        label: 'Description',
                        sortable: false
                    }
                ]
            }
        },
        computed: {
            data() {
                return this.$store.getters.data;
            },
            perPage() {
                return this.$store.getters.perPage;
            },
            currentPage() {
                return this.$store.getters.currentPage;
            },
            pagesCount() {
                const length = this.data.length;

                let count = length / this.perPage;

                if (length % this.perPage) {
                    count += 1;
                }

                return count;
            },
            pages() {
                const pages = [];
                for (let i = 1; i <= this.pagesCount; i++) {
                    pages.push(i);
                }

                return pages;
            }
        },
        mounted() {
            const isMobile = window.innerWidth < 768;

            if (isMobile) {
                this.perPage = 5;
            }

        },
        methods: {
          onClickChangePage({type, page}) {
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
            onClickChooseUser(userId) {
              this.$store.dispatch('getChosenUser', userId);

              setTimeout(() => {
                  window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: 'smooth'
                  });
              }, 100);
            }
        },
        components: {
            Pagination
        }
    }
</script>

<style lang="scss">
    .sort-icon {
        background: transparent;
        display: inline-block;
        width: 7px;
        height: 28px;
        position: relative;
        color: #fff;

        &::before {
            content: '';
            position: absolute; /* Абсолютное позиционирование */
            left: 0;
            top: -3px; /* Положение треугольника */
            border: 7px solid transparent;
            border-bottom: 7px solid grey;
        }

        &::after {
            content: '';
            position: absolute; /* Абсолютное позиционирование */
            left: 0;
            bottom: -3px; /* Положение треугольника */
            border: 7px solid transparent; /* Прозрачные границы */
            border-top: 7px solid grey; /* Добавляем треугольник */
        }

        &--up {
            &::before {
                border-bottom-color: #007bff;
            }
        }

        &--down {
            &::after {
                border-top-color: #007bff;
            }
        }
    }

    th.sort {
        cursor: pointer;
    }
</style>
