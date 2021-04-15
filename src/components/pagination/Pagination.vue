<template>
    <ul class="pagination">
        <li class="pagination__item">
            <button class="pagination__link" type="button" aria-label="First"
                    @click="handlerClickChangePage('first', null)"
                    :disabled="currentPage === 1">
                <span aria-hidden="true">&laquo;</span>
            </button>
        </li>
        <li class="pagination__item">
            <button class="pagination__link" type="button" aria-label="Previous"
                    @click="handlerClickChangePage('prev', null)"
                    :disabled="currentPage === 1">
                <span aria-hidden="true">&lsaquo;</span>
            </button>
        </li>
        <li class="pagination__item pagination__item--disabled" v-if="showLeftEllipsis">
            <span class="pagination__link">...</span>
        </li>
        <li :class="{
                'pagination__item': true,
                'pagination__item--active': currentPage === page
                }"
            v-for="page in pages.slice(pageCountStart, pageCountEnd)" :key="page">
            <button class="pagination__link" type="button"
                    @click="handlerClickChangePage('', page)">
                {{page}}</button>
        </li>
        <li class="pagination__item pagination__item--disabled" v-if="showRightEllipsis">
            <span class="pagination__link">...</span>
        </li>
        <li class="pagination__item">
            <button class="pagination__link" type="button" aria-label="Next"
                    @click="handlerClickChangePage('next', null)"
                    :disabled="currentPage === pages.length">
                <span aria-hidden="true">&rsaquo;</span>
            </button>
        </li>
        <li class="pagination__item">
            <button class="pagination__link" type="button" aria-label="Last"
                    @click="handlerClickChangePage('last', null)"
                    :disabled="currentPage === pages.length">
                <span aria-hidden="true">&raquo;</span>
            </button>
        </li>
    </ul>
</template>

<script lang="ts">
    import Vue, { PropType } from 'vue';
    import './Pagination.scss';

    export default Vue.extend({
        name: "Pagination",
        props: {
            pages: Array as PropType<number[]>
        },
        data() {
            return {
                maxPaginationItems: 4 as number
            }
        },
        computed: {
            currentPage(): number {
                return this.$store.getters.currentPage;
            },
            pageCountStart(): number {
                if (this.currentPage < this.maxPaginationItems) {
                    return 0;
                } else if (this.currentPage >= this.pages.length - 2) {
                    return this.pages.length - this.maxPaginationItems;
                }

                return this.currentPage - 2;
            },
            pageCountEnd(): number {
                if (this.currentPage < this.maxPaginationItems) {
                    return 4;
                } else if (this.currentPage >= this.pages.length - 2) {
                    return this.pages.length;
                }

                return this.currentPage + 1;
            },
            showLeftEllipsis(): boolean {
                return this.currentPage > this.maxPaginationItems;
            },
            showRightEllipsis(): boolean {
                return this.pages.length > this.maxPaginationItems && this.currentPage < this.pages.length - 2;
            }
        },
        methods: {
            handlerClickChangePage(type: string, page: number | null): void {
                this.$emit('onClickChangePage', {type, page})
            }
        }
    })
</script>

<style lang="scss">
    .page-item {
        button:disabled:hover {
            background-color: inherit;
            border: 1px solid #dee2e6;
        }
    }
</style>
