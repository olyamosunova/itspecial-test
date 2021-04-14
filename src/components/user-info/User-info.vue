<template>
    <div class="card mt-5">
        <div class="card-body">
            <p class="card-text">Selected user: <b>{{user.firstName}} {{user.lastName}}</b></p>
            <p class="card-text">Description:
                <textarea class="form-control" v-model="user.description" disabled></textarea>
            </p>
            <p class="card-text">Residence address: <b>{{user.adress.streetAddress}}</b></p>
            <p class="card-text">City: <b>{{user.adress.city}}</b></p>
            <p class="card-text">Province / State: <b>{{user.adress.state}}</b></p>
            <p class="card-text">Zip: <b>{{user.adress.zip}}</b></p>
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
