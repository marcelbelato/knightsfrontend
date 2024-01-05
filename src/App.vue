<template>
  <nav class="header">
      <router-link class="menu-item" to="/">Home </router-link> 
      <router-link class="menu-item" to="/all-knights">All Knights </router-link>
      <router-link class="menu-item" to="/create-knight">Create Knight </router-link>
  </nav>
  <router-view/>
</template>

<style scoped>
.header {
  background-color: #666;
  color: #2a6643;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
	top: 0;
	left: 0;
	right: 0;
  height: 50px;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 0 10px 0;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 2px;
  border-color: #666;
}

.header .menu-item {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  margin: 0 20px;
  padding: 0px 5px 0px 5px;
}

.header .menu-item:active {
  color: #143321;
  text-decoration: none;
}

.header .menu-item:hover {
  color: #143321;
  text-decoration: none;
  border-radius: 10px;
  background-color: #999;
  padding: 0px 5px 0px 5px;
  border-style: dotted;
  border-width: 1px;
  border-color: #333;
}
</style>