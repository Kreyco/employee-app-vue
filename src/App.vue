<template>
  <div id="app" class="container-fluid">
    <EmployeeView/>
  </div>
</template>

<script>
import EmployeeView from './views/EmployeeView'

export default {
  name: 'App',
  components: {
    EmployeeView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>