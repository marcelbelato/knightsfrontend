<template>
  <div class="wrapper">
    <h3>Delete Knight</h3>
    <p>Are you sure you want to delete this knight?</p>
    <p>{{ message }}</p>
    <button class="btn btn-primary" @click="deleteKnight()">Delete</button> &nbsp;&nbsp;
    <router-link class="btn btn-primary" to="/all-knights">Cancel</router-link>
  </div>
</template>

<script>
import api from "@/services/service";

export default {
  name: "DeleteKnightView",
  data() {
    return {
      knight: {},
      message: "",
    };
  },
  created() {
    // this.deleteKnight();
  },
  methods: {
    getKnight() {
      api
        .getKnightById(this.$route.params.id)
        .then((response) => {
          this.knight = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteKnight() {
      api
        .deleteKnight(this.$route.params.id)
        .then(() => {
          this.$router.push({ name: "AllKnights" });
        })
        .catch((error) => {
          this.message = error.response.data.message;
        });
    },
  },
};
</script>
<style scoped>
.wrapper {
  max-width: 800px;
  padding: 0px 15px 20px 15px;
  margin: 0 auto;
  font-size: 18px;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-color: #666;
}

h3 {
  margin: 40px auto;
}
</style>