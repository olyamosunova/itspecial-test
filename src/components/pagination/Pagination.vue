<template>
    <nav class="d-flex justify-content-end">
        <ul class="pagination">
            <li class="page-item">
                <button class="page-link" type="button" aria-label="First"
                        @click="handlerClickChangePage('first')"
                        :disabled="currentPage === 1">
                    <span aria-hidden="true">&laquo;</span>
                </button>
            </li>
            <li class="page-item">
                <button class="page-link" type="button" aria-label="Previous"
                        @click="handlerClickChangePage('prev')"
                        :disabled="currentPage === 1">
                    <span aria-hidden="true">&lsaquo;</span>
                </button>
            </li>
            <li class="page-item disabled" v-if="showLeftEllipsis">
                <span class="page-link">...</span>
            </li>
            <li :class="{
                'page-item': true,
                'active': currentPage === page
                }"
                v-for="page in pages.slice(pageCountStart, pageCountEnd)" :key="page">
                <button class="page-link" type="button"
                        @click="handlerClickChangePage('', page)">
                    {{page}}</button>
            </li>
            <li class="page-item disabled" v-if="showRightEllipsis">
                <span class="page-link">...</span>
            </li>
            <li class="page-item">
                <button class="page-link" type="button" aria-label="Next"
                        @click="handlerClickChangePage('next')"
                        :disabled="currentPage === pages.length">
                    <span aria-hidden="true">&rsaquo;</span>
                </button>
            </li>
            <li class="page-item">
                <button class="page-link" type="button" aria-label="Last"
                        @click="handlerClickChangePage('last')"
                        :disabled="currentPage === pages.length">
                    <span aria-hidden="true">&raquo;</span>
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            pages: Array
        },
        data() {
            return {
                maxPaginationItems: 4
            }
        },
        computed: {
            currentPage() {
                return this.$store.getters.currentPage;
            },
            pageCountStart() {
                if (this.currentPage < this.maxPaginationItems) {
                    return 0;
                } else if (this.currentPage >= this.pages.length - 2) {
                    return this.pages.length - this.maxPaginationItems;
                }

                return this.currentPage - 2;
            },
            pageCountEnd() {
                if (this.currentPage < this.maxPaginationItems) {
                    return 4;
                } else if (this.currentPage >= this.pages.length - 2) {
                    return this.pages.length;
                }

                return this.currentPage + 1;
            },
            showLeftEllipsis() {
                return this.currentPage > this.maxPaginationItems;
            },
            showRightEllipsis() {
                return this.pages.length > this.maxPaginationItems && this.currentPage < this.pages.length - 2;
            }
        },
        methods: {
            handlerClickChangePage(type, page) {
                this.$emit('onClickChangePage', {type, page})
            }
        }
    }
</script>

<style lang="scss">
    .page-item {
        button:disabled:hover {
            background-color: inherit;
            border: 1px solid #dee2e6;
        }
    }
</style>
