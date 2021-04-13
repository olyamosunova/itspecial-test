<template>
    <nav class="d-flex justify-content-end">
        <ul class="pagination">
            <li class="page-item">
                <button class="page-link" type="button" aria-label="Previous" @click="handlerClickChangePage('prev')" :disabled="currentPage === 1">
                    <span aria-hidden="true">&laquo;</span>
                </button>
            </li>
            <li class="page-item" v-bind:class="{'active': currentPage === page}" v-for="page in pages" :key="page">
                <button class="page-link" type="button" @click="handlerClickChangePage('', page)">{{page}}</button>
            </li>
            <li class="page-item">
                <button class="page-link" type="button" aria-label="Next" @click="handlerClickChangePage('next')" :disabled="currentPage === pages.length">
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
            return {}
        },
        computed: {
            currentPage() {
                return this.$store.getters.currentPage;
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
