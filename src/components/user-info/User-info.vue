<template>
    <div class="mt-5">
        <p>Выбран пользователь: <b>{{user.firstName}} {{user.lastName}}</b></p>
        <p>Описание: {{user.description}}</p>
        <p>Адрес проживания: <b>{{user.adress.streetAddress}}</b></p>
        <p>Город: <b>{{user.adress.city}}</b></p>
        <p>Провинция/штат: <b>{{user.adress.state}}</b></p>
        <p>Индекс: <b>{{user.adress.zip}}</b></p>
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
