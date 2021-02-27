<template>
<div>
  <ReadForm @search="searchEmployee"/>
  <EmployeeList :employees="employees"/>
</div>
</template>

<script>
import ReadForm from '../components/ReadForm.vue'
import EmployeeList from '../components/EmployeeList.vue'
import employeeAPI from '../logic/Employee'

export default {
  name: "EmployeeView",
  components: {
    ReadForm,
    EmployeeList
  },
  props: {},
  data() {
    return {
      loading: {
        data: true,
      },
      employees: []
    };
  },
  methods: {
    loadingState(type, state = true) {
      this.loading[type] = state;
    },
    async read() {
      employeeAPI
        .get()
        .then((response) => {
          this.employees = response.data;

          this.loadingState("data", false);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
    searchEmployee(value) {
      employeeAPI
      // .getById(value)
      .get()
      .then((response) => {
        this.employees = response.data;

          this.loadingState("data", false);
      })
      .catch((error) => {
          console.log(error.response.data);
      });
    }
  },
  created() {
    this.read();
  },
};
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
