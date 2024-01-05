<template>
  <nav class="header">
      <i class="icon icon-forward"></i> <router-link to="/">Home </router-link> 
      <i class="icon icon-forward"></i> <router-link to="/all-knights">All Knights </router-link>
      <i class="icon icon-forward"></i> <router-link to="/create-knight">Create Knight </router-link>
  </nav>
  <router-view/>
</template>

<style>
.header {
	position: static;
	top: 0;
	left: 0;
	right: 0;
  height: 20px;
  margin-bottom: 10px;
  padding-top: 5px;
}
</style>