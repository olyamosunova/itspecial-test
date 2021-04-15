<template>
    <div class="card">
        <div class="card__body">
            <p class="card__text" v-if="user.firstName || user.lastName">Selected user: <b>{{user.firstName}} {{user.lastName}}</b></p>
            <p class="card__text" v-if="user.description"> Description:
                <textarea ref="textarea" class="card__textarea" v-model="user.description" disabled></textarea>
            </p>
            <p class="card__text" v-if="user.adress && user.adress.streetAddress">Residence address: <b>{{user.adress.streetAddress}}</b></p>
            <p class="card__text" v-if="user.adress && user.adress.city">City: <b>{{user.adress.city}}</b></p>
            <p class="card__text" v-if="user.adress && user.adress.state">Province / State: <b>{{user.adress.state}}</b></p>
            <p class="card__text" v-if="user.adress && user.adress.zip">Zip: <b>{{user.adress.zip}}</b></p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import './User-info.scss';

    export default Vue.extend({
        name: "User-info",
        mounted() {
            this.setTextareaHeight();
        },
        computed: {
            user(): object {
                return this.$store.getters.chosenUser;
            }
        },
        watch: {
            'user.description'(newValue, oldValue) {
                if (newValue !== oldValue) {
                   this.setTextareaHeight();
                }
            }
        },
        methods: {
            setTextareaHeight(): void {
                const textarea = this.$refs.textarea as HTMLElement;
                textarea.style.height = `${textarea.scrollHeight + 2}px`;
            }
        }
    })
</script>
