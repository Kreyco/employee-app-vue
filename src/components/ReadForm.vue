<template>
  <div class="row">
    <div class="col-md-12">
      <div class="jumbotron">
        <h1>{{ $t("readform.title.consultation") }}</h1>

        <form role="form" @submit="read">
          <div class="mb-3">
            <label for="user_id" class="form-label">
              {{ $t("readform.label.user_id") }}
            </label>
            <input
              id="user_id"
              class="form-control"
              type="text"
              :placeholder="$t('readform.label.user_placeholder')"
            />
          </div>
          <div class="col-auto">
            <button @click="read" class="btn btn-primary mb-3">
              {{ $t("readform.title.get_employees") }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReadForm",
  props: {},
  methods: {
    async read() {
      console.log('execute read');

      await window.axios
        .get("http://masglobaltestapi.azurewebsites.net/api/Employees")
        .then(response => {
          this.products = response.data;

          this.loadingState("table", false);
          this.loadingState("data", false);

          this.getStockData();
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  }
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
