<template>
    <form @submit="onSubmit">
        <div class="input-group mb-3">
            <input v-model="form.title" type="text" class="form-control" placeholder="Enter text" aria-label="Enter text" required>
            <button class="btn btn-primary" type="submit" :disabled="!data">Find</button>
        </div>
    </form>
</template>

<script>
    export default {
        name: "Form-filter",
        data() {
            return {
                form: {
                    title: ''
                }
            }
        },
        computed: {
          data() {
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
            onSubmit(evt) {
                evt.preventDefault();

                this.$store.dispatch('changeCurrentPage', 1);
                this.$store.dispatch('filterData', this.form.title);
            }
        }
    }
</script>
