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

<script lang="ts">
    import Vue, { PropType } from 'vue';
    import { SORT_TYPE } from '@/const';

    interface ComplexField {
        key: string,
        label: string,
        sortable: boolean
    }

    export default Vue.extend({
        name: "Field-title",
        props: {
            field: {
                type: Object as PropType<ComplexField>,
                required: true
            }
        },
        data() {
            return {
                SORT_TYPE: SORT_TYPE as object,
                activeSortType: '' as string
            }
        },
        created() {
            const onClickField = (evt: MouseEvent) => this.activeSortType = this.$el.contains(evt.target as HTMLElement) ? this.activeSortType : '';

            document.addEventListener('click', onClickField);
            this.$on('hook:beforeDestroy', () => document.removeEventListener('click', onClickField));
        },
        computed: {
            activeSortBy(): string {
                return this.$store.getters.activeSortBy;
            },
        },
        methods: {
            handlerClickSortData(sortBy: string): void {
                if (this.field.sortable) {
                    this.activeSortType = this.activeSortType ? this.activeSortType === SORT_TYPE.INC ? SORT_TYPE.DEC : SORT_TYPE.INC : SORT_TYPE.INC;

                    this.$store.dispatch('sortingData', {sortBy, sortType: this.activeSortType});
                }
            }
        }
    })
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
