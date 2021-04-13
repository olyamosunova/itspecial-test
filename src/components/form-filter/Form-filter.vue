<template>
    <b-form @submit="onSubmit">
        <b-input-group prepend="Text" class="mt-3">
            <b-form-input
                    id="text"
                    v-model="form.title"
                    type="text"
                    placeholder="Enter text"
                    required
            />
            <b-input-group-append>
                <b-button type="submit" variant="primary">Find</b-button>
            </b-input-group-append>
        </b-input-group>
    </b-form>
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

                this.$store.dispatch('filterData', this.form.title);
            }
        }
    }
</script>
