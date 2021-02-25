<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col" v-for="(header, index) in headers" :key="index">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="employee in employees" :key="employee.id">
        <th scope="row">{{ employee.id }}</th>
        <th>{{ employee.name || employee.chartName }}</th>
        <th>{{ employee.lastname || employee.disclaimer }}</th>
        <th>{{ employee.salary }}</th>
        <th>{{ employee.status }}</th>
      </tr>
    </tbody>

  </table>
</template>

<script>
export default {
  name: 'EmployeeList',
  props: {},
  data() {
    return {
      loading: {
        data: true
      },
      headers: ['#', 'Name', 'Lastname', 'Salary', this.$t('employeelist.title.status')],
      employees: [
        {'id': 1, 'name': 'Will', 'lastname': 'Marine', 'salary': '0000', 'status': 'Active'}, 
        {'id': 2, 'name': 'Jessi', 'lastname': 'James', 'salary': '0000', 'status': 'Active'}
      ]
    }
  },
  methods: {
    loadingState(type, state = true) {
      this.loading[type] = state;
    },
    async read() {
      console.log('execute read');

      await window.axios
        .get("http://masglobaltestapi.azurewebsites.net/swagger/")
        // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {
          this.employees = response;

          this.loadingState("data", false);
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  },
  created() {
    this.read();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
