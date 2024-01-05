<template>
  <div class="wrapper">
    <div class="hero bg-gray">
      <div class="hero-body">
        <h3>Create a Knight</h3>
      </div>
    </div>
    <div class="container">
      <form class="form-horizontal" @submit.prevent="saveKnight">
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
            v-model="knight.attributes.strength">
        </div>
        <div class="form-group">
          <label class="form-label" for="dexterity">Dexterity</label>
          <input class="form-input" type="number" id="dexterity" placeholder="dexterity" value="0"
            v-model="knight.attributes.dexterity">
        </div>
        <div class="form-group">
          <label class="form-label" for="constitution">Constitution</label>
          <input class="form-input" type="number" id="constitution" placeholder="constitution" value="0"
            v-model="knight.attributes.constitution">
        </div>
        <div class="form-group">
          <label class="form-label" for="intelligence">Intelligence</label>
          <input class="form-input" type="number" id="intelligence" placeholder="intelligence" value="0"
            v-model="knight.attributes.intelligence">
        </div>
        <div class="form-group">
          <label class="form-label" for="wisdom">Wisdom</label>
          <input class="form-input" type="number" id="wisdom" placeholder="wisdom" value="0"
            v-model="knight.attributes.wisdom">
        </div>
        <div class="form-group">
          <label class="form-label" for="charisma">Charisma</label>
          <input class="form-input" type="number" id="charisma" placeholder="charisma" value="0"
            v-model="knight.attributes.charisma">
        </div>
        <div class="form-group">
          <label class="form-label" for="keyAttribute">Key Attribute</label>
          <input class="form-input" type="text" id="keyAttribute" placeholder="Key Attribute"
            v-model="knight.keyAttribute">
        </div>

        <table class="table col-100%">
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

        <table class="table col-100%">
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

      if(this.knight.name == "" || this.knight.nickname == "" || this.knight.birthday == "" || this.knight.keyAttribute == "") {
        alert("You must fill all knight fields!");
        return;
      }

      if(this.knight.keyAttribute != "Strength"
          && this.knight.keyAttribute != "Dexterity"
          && this.knight.keyAttribute != "Constitution"
          && this.knight.keyAttribute != "Intelligence"
          && this.knight.keyAttribute != "Wisdom"
          && this.knight.keyAttribute != "Charisma") {
            alert("Key Attribute must be one of the following: Strength, Dexterity, Constitution, Intelligence, Wisdom or Charisma.");
            return;
        };

      api.createKnight(this.knight).then(response => {
        if (response.status === 201) {
          alert("Knight has been created.");
          this.$router.push({ name: "AllKnights" });

        }
        else if (response.status === 400) {
          alert(`Error creating knight: ${response.data.message}`);
        } 
        else {
          alert("Error creating knight.");
        }
      });
    },
    addWeapon() {

      if(this.weapon.name == "" || this.weapon.mod == 0 || this.weapon.attr == "") {
        alert("You must fill all weapon fields!");
        return;
      };

      if(this.weapon.attr != "Strength"
          && this.weapon.attr != "Dexterity"
          && this.weapon.attr != "Constitution"
          && this.weapon.attr != "Intelligence"
          && this.weapon.attr != "Wisdom"
          && this.weapon.attr != "Charisma") {
            alert("Key Attribute must be one of the following: Strength, Dexterity, Constitution, Intelligence, Wisdom or Charisma.");
            return;
        };

      if ((this.knight.weapons.find(w => w.equipped == true) != undefined)
        && this.weapon.equipped == true) {
        alert("You can't add more than one equipped weapon!");
        return;
      }

      if (this.weapon.name == "" || this.weapon.mod == 0 || this.weapon.attr == "") {
        alert("You must fill all weapon fields!");
        return;
      }

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
</style>