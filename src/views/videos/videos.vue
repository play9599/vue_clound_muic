<template>
  <div>
      <sencond-menu></sencond-menu>
      <router-view></router-view>
  </div>
</template>

<script>
    import sencondMenu from "../../components/content/sencondMenu/sencondMenu";
	export default {
		name: "videos",
        components:{
			sencondMenu
        }
	}
</script>

<style scoped>

</style>