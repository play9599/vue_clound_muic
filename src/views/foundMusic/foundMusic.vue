<template>
  <div class="found">
      <sencond-menu></sencond-menu>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
    import sencondMenu from "../../components/content/sencondMenu/sencondMenu";
	export default {
		name: "foundMusic",
        components:{
			sencondMenu,
        }
	}
</script>

<style scoped>

</style>