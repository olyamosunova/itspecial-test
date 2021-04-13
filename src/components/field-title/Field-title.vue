<template>
    <th
        @click="handlerClickSortData(field.key)"
        :class="{sort: field.sortable}"
        scope="col">
        {{ field.label }}
        <span
            v-if="field.sortable"
            :class="{
            'sort-icon': true,
            'sort-icon--up': activeSortBy === field.key && activeSortType === SORT_TYPE.INC,
            'sort-icon--down': activeSortBy === field.key && activeSortType === SORT_TYPE.DEC
            }"></span>
    </th>
</template>

<script>
    import {SORT_TYPE} from "../../const";

    export default {
        name: "Field-title",
        props: {
            field: Object
        },
        data() {
            return {
                SORT_TYPE,
                activeSortType: null
            }
        },
        created() {
            const onClickField = (evt) => this.activeSortType = this.$el.contains(evt.target) ? this.activeSortType : null;

            document.addEventListener('click', onClickField);
            this.$on('hook:beforeDestroy', () => document.removeEventListener('click', onClickField));
        },
        computed: {
            activeSortBy() {
                return this.$store.getters.activeSortBy;
            },
        },
        methods: {
            handlerClickSortData(sortBy) {
                if (this.field.sortable) {
                    this.activeSortType = this.activeSortType ? this.activeSortType === SORT_TYPE.INC ? SORT_TYPE.DEC : SORT_TYPE.INC : SORT_TYPE.INC;

                    this.$store.dispatch('sortingData', {sortBy, sortType: this.activeSortType});
                }
            }
        }
    }
</script>

<style lang="scss">
    .sort-icon {
        display: inline-block;
        width: 11px;
        height: 15px;
        position: relative;
        color: #fff;

        background-image: url("../../assets/ic-sort-none.svg");
        background-repeat: no-repeat;
        background-size: .65em 1em;

        &--up {
            background-image: url("../../assets/ic-sort-inc.svg");
        }

        &--down {
            background-image: url("../../assets/ic-sort-dec.svg");
        }

    }
</style>
