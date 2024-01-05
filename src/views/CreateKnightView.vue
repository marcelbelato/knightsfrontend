<template>
  <div class="hero bg-gray">
    <div class="hero-body">
      <h3>Create a Knight</h3>
    </div>
  </div>
  <div class="container">
    <form class="form-horizontal col-6" @submit.prevent="saveKnight">
      <div class="form-group">
        <label class="form-label" for="name">Name</label>
        <input class="form-input" type="text" id="name" placeholder="Name" v-model="knight.name">
      </div>
      <div class="form-group">
        <label class="form-label" for="nickname">Nickname</label>
        <input class="form-input" type="text" id="nickname" placeholder="Nickname" v-model="knight.nickname">
      </div>
      <div class="form-group">
        <label class="form-label" for="birthday">Birthday</label>
        <input class="form-input" type="date" id="birthday" v-model="knight.birthday">
      </div>
      <div class="form-group">
        <label class="form-label" for="strength">Strength</label>
        <input class="form-input" type="number" id="strength" placeholder="Strength" value="0"
          v-model="knight.attributes.strength" pattern="[0-9]+$">
      </div>
      <div class="form-group">
        <label class="form-label" for="dexterity">Dexterity</label>
        <input class="form-input" type="number" id="dexterity" placeholder="dexterity" value="0"
          v-model="knight.attributes.dexterity" pattern="[0-9._%+-]+$">
      </div>
      <div class="form-group">
        <label class="form-label" for="constitution">Constitution</label>
        <input class="form-input" type="number" id="constitution" placeholder="constitution" value="0"
          v-model="knight.attributes.constitution" pattern="[0-9._%+-]+$">
      </div>
      <div class="form-group">
        <label class="form-label" for="intelligence">Intelligence</label>
        <input class="form-input" type="number" id="intelligence" placeholder="intelligence" value="0"
          v-model="knight.attributes.intelligence" pattern="[0-9]+$">
      </div>
      <div class="form-group">
        <label class="form-label" for="wisdom">Wisdom</label>
        <input class="form-input" type="number" id="wisdom" placeholder="wisdom" value="0"
          v-model="knight.attributes.wisdom" pattern="[0-9._%+-]+$">
      </div>
      <div class="form-group">
        <label class="form-label" for="charisma">Charisma</label>
        <input class="form-input" type="number" id="charisma" placeholder="charisma" value="0"
          v-model="knight.attributes.charisma" pattern="[0-9._%+-]+$">
      </div>
      <div class="form-group">
        <label class="form-label" for="keyAttribute">Key Attribute</label>
        <input class="form-input" type="text" id="keyAttribute" placeholder="Key Attribute"
          v-model="knight.keyAttribute">
      </div>

      <table class="table col-12">
        <thead>
          <tr>
            <th>Weapon Name</th>
            <th>Mod</th>
            <th>Attr</th>
            <th>Equipped</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input class="form-input" type="text" id="weaponName" placeholder="Weapon Name" v-model="weapon.name">
            </td>
            <td>
              <input class="form-input" type="number" id="weaponMod" placeholder="Weapon Mod" v-model="weapon.mod">
            </td>
            <td>
              <input class="form-input" type="text" id="weaponAttr" placeholder="Weapon Attr" v-model="weapon.attr">
            </td>
            <td>
              <div class="form-group">
                <label class="form-checkbox form-inline">
                  <input type="checkbox" id="weaponEquipped" v-model="weapon.equipped"><i class="form-icon"></i>
                </label>
              </div>
            </td>
            <td>
              <a class="btn btn-primary" @click="addWeapon()"><i class="icon icon-plus"></i></a>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="table col-12">
        <thead>
          <tr>
            <th>Weapon Name</th>
            <th>Mod</th>
            <th>Attr</th>
            <th>Equipped</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(weapon, index) in knight.weapons" :key="index">
            <td>{{ weapon.name }}</td>
            <td>{{ weapon.mod }}</td>
            <td>{{ weapon.attr }}</td>
            <td>{{ weapon.equipped }}</td>
            <td>
              <a class="btn btn-primary" @click="removeWeapon(index)"><i class="icon icon-minus"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button class="btn btn-primary">Save Knight</button>
    </form>
  </div>
</template>

<script>
import api from "@/services/service";

export default {
  name: "CreateKnightView",
  data() {
    return {
      knight: {
        name: "",
        nickname: "",
        birthday: "",
        attributes: {
          strength: 0,
          dexterity: 0,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0
        },
        keyAttribute: "",
        weapons: [],
      },
      weapon: {
        name: "",
        mod: 0,
        attr: "",
        equipped: false
      },
      knights: []
    };
  },
  methods: {
    saveKnight() {
      api.createKnight(this.knight).then(response => {
        if (response.status == 201) {
          alert("Knight created!");
          this.$router.push({ name: "AllKnights" });
        } else {
          alert("Error creating knight!");
        }
      });
    },
    addWeapon() {
      this.knight.weapons.push({
        name: this.weapon.name,
        mod: this.weapon.mod,
        attr: this.weapon.attr,
        equipped: this.weapon.equipped
      });
    },
    removeWeapon(index) {
      this.knight.weapons.splice(index, 1);
    }
  }
}

</script>