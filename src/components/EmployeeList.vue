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
        <th>{{ employee.name }}</th>
        <th>{{ employee.roleName }}</th>
        <th>{{ employee.roleDescription || "" }}</th>
        <th>{{ employee.hourlySalary }}</th>
        <th>{{ employee.monthlySalary }}</th>
        <th>{{ employee.calculatedAnnualSalary || 0 }}</th>
        <th>{{ employee.contractTypeName }}</th>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "EmployeeList",
  components: {},
  props: {
    employees: {
      type: [Object, Array],
      default: () => []
    }
  },
  data() {
    return {
      loading: {
        data: true,
      },
      headers: [
        this.$t("employeelist.title.id"),
        this.$t("employeelist.title.name"),
        this.$t("employeelist.title.role_name"),
        this.$t("employeelist.title.role_description"),
        this.$t("employeelist.title.hourly_salary"),
        this.$t("employeelist.title.monthly_salary"),
        this.$t("employeelist.title.calculatedAnnualSalary"),
        this.$t("employeelist.title.contract_type_name"),
      ]
    };
  },
  methods: {
    loadingState(type, state = true) {
      this.loading[type] = state;
    }
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
