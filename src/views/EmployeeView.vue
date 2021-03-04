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
      if (value != null && !this.checkForm(value)) {
        return false;
      }

      employeeAPI
      .getById(value)
      .then((response) => {
        this.employees = response.data;

        this.loadingState("data", false);
      })
      .catch((error) => {
          console.log(error.response.data);
      });
    },
    checkForm(value) {
      let regex = /^\d+$/gm;

      return regex.test(value);
    }
  },
  created() {
    this.read();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
