<template>
  <div id="app">
    <nav-bar></nav-bar>
  </div>
</template>
<script>
  import navBar from "./components/common/navBar/navBar";
	export default {
		name:"App",
    components:{
			navBar
    }
	}
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
  user-select: none;
}
</style>
