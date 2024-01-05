<template>
  <div class="hero bg-gray">
    <div class="hero-body">
      <h3>Edit Knight</h3>
      <p>Here you can edit the Nickname of your character.</p>
    </div>
  </div>
  <div class="container">
  <form class="form-horizontal col-6" @submit.prevent="updateKnight">
    <div class="form-group">
      <label class="form-label" for="nickname">Nickname</label>
      <input class="form-input" type="text" id="nickname" placeholder="Nickname" v-model="knight.nickname">
    </div>
    <br />
    <button class="btn btn-primary">Update Knight</button>
  </form>
</div>
</template>

<script>
import api from "@/services/service";

export default {
  name: "EditKnightView",
  data() {
    return {
      knight: {
        nickname: "",
      },
    };
  },
  created() {
    this.getKnight();
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
    updateKnight() {
      api
        .updateKnight(this.$route.params.id, this.knight)
        .then(() => {
          this.$router.push({ name: "AllKnights" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>