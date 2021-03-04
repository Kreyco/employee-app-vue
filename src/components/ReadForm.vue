<template>
  <div class="row">
    <div class="col-md-12">
      <div class="jumbotron">
        <h1>{{ $t("readform.title.consultation") }}</h1>

        <form role="form" @submit.prevent="search">
          <div class="mb-3">
            <label for="user_id" class="form-label">
              {{ $t("readform.label.user_id") }}
            </label>
            <input
              v-model.number="userId"
              id="user_id"
              class="form-control"
              type="text"
              :placeholder="$t('readform.label.user_placeholder')"
            />
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">
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
  data() {
    return {
      userId: null
    }
  },
  methods: {
    search() {
      this.$emit('search', this.userId);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
