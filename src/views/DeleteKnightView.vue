<template>
  <div class="hero bg-gray">
    <div class="hero-body">
      <h3>Delete Knight</h3>
      <p>{{ message }}</p>
    </div>
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
    this.deleteKnight();
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