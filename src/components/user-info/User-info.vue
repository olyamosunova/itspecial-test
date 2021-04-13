<template>
    <div class="card mt-5">
        <div class="card-body">
            <p class="card-text">Выбран пользователь: <b>{{user.firstName}} {{user.lastName}}</b></p>
            <p class="card-text">Описание: {{user.description}}</p>
            <p class="card-text">Адрес проживания: <b>{{user.adress.streetAddress}}</b></p>
            <p class="card-text">Город: <b>{{user.adress.city}}</b></p>
            <p class="card-text">Провинция/штат: <b>{{user.adress.state}}</b></p>
            <p class="card-text">Индекс: <b>{{user.adress.zip}}</b></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "User-info",
        computed: {
            user() {
                return this.$store.getters.chosenUser;
            }
        }
    }
</script>

<style scoped>

</style>
