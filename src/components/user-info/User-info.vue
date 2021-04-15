<template>
    <div class="card mt-5">
        <div class="card-body">
            <p class="card-text" v-if="user.firstName || user.lastName">Selected user: <b>{{user.firstName}} {{user.lastName}}</b></p>
            <p class="card-text" v-if="user.description"> Description:
                <textarea class="form-control" v-model="user.description" disabled></textarea>
            </p>
            <p class="card-text" v-if="user.adress && user.adress.streetAddress">Residence address: <b>{{user.adress.streetAddress}}</b></p>
            <p class="card-text" v-if="user.adress && user.adress.city">City: <b>{{user.adress.city}}</b></p>
            <p class="card-text" v-if="user.adress && user.adress.state">Province / State: <b>{{user.adress.state}}</b></p>
            <p class="card-text" v-if="user.adress && user.adress.zip">Zip: <b>{{user.adress.zip}}</b></p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "User-info",
        computed: {
            user(): object {
                return this.$store.getters.chosenUser;
            }
        }
    })
</script>
