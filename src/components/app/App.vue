<template>
  <div id="app">
    <Main />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import './App.scss';
  import 'bootstrap/dist/css/bootstrap.css';
  import Main from '@/components/main/Main.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Main
  }
})
</script>
