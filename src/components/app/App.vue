<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
  import "./App.scss";
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';
  import Main from "../main/Main";

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>
