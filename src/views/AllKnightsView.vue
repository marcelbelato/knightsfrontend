<template>
  <div class="hero bg-gray">
    <div class="hero-body">
      <h3>Knights List</h3>
      <p>List of all records (knights and heroes)</p>
    </div>
  </div>
  <div class="container">
    <form @submit.prevent="getAllKnights">
      <div class="form-group col-4">
        <select class="form-select" v-model="filter">
          <option>All</option>
          <option>Heroes</option>
        </select>
        <a class="btn" @click="getAllKnights">Filter</a>
      </div>
    </form>
    <br />
    <table class="table table-striped table-hover">
      <thead class="head">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Weapons</th>
          <th>KeyAttribute</th>
          <th>Attack</th>
          <th>Experience</th>
          <th>IsHero</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="knight in knights" :key="knight.id">
          <td>{{ knight.name }}</td>
          <td>{{ knight.age }}</td>
          <td>{{ knight.countWeapons }}</td>
          <td>{{ knight.keyAttribute }}</td>
          <td>{{ knight.attack }}</td>
          <td>{{ knight.experience }}</td>
          <td>{{ knight.isHero }}</td>
          <td>
            <router-link :to="{ name: 'EditKnight', params: { id: knight.id } }">
              <i class="icon icon-edit"></i>
            </router-link> |
            <router-link :to="{ name: 'DeleteKnight', params: { id: knight.id } }">
              <i class="icon icon-delete"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from "@/services/service";

export default {
  name: "AllKnightsView",
  data() {
    return {
      filter: "",
      knights: []
    };
  },
  mounted() {
    api.getAllKnights().then(response => {
      this.knights = response.data;
    });
  },
  methods: {
    getAllKnights() {
      api.getAllKnights(this.filter).then(response => {
        this.knights = response.data;
      });
    },
    deleteKnight(id) {
      api.deleteKnight(id).then(() => {
        this.getAllKnights();
      });
    },
  }
};

</script>

<style scoped>
.head {
  background-color: #e6e6e6;
  font-size: 20px;
}
</style>