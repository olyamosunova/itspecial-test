<template>
    <form class="form" @submit="onSubmit">
        <div class="form__block">
            <input v-model="form.title" type="text" class="form__control" placeholder="Enter text" aria-label="Enter text" required>
            <button class="button" type="submit" :disabled="!data">Find</button>
        </div>
    </form>
</template>

<script lang="ts">
    import Vue from 'vue';
    import './Form.scss';

    export default Vue.extend({
        name: "Form-filter",
        data() {
            return {
                form: {
                    title: '' as string
                }
            }
        },
        computed: {
          data(): Array<object> {
              return this.$store.getters.data;
          }
        },
        watch: {
            'form.title'() {
                if (!this.form.title) {
                    this.$store.dispatch('clearFilterInput');
                }
            }
        },
        methods: {
            onSubmit(evt: any): void {
                evt.preventDefault();

                this.$store.dispatch('changeCurrentPage', 1);
                this.$store.dispatch('filterData', this.form.title);
            }
        }
    })
</script>
