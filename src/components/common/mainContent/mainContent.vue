<template>
  <div class="container">
    <nav-bar></nav-bar>
    <div class="content">
      <div class="left">
        <left-list></left-list>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
    <footers></footers>
  </div>
</template>

<script>
  import navBar from "../navBar/navBar";
  import leftList from "../../content/leftList/leftList";
  import footers from "../footers/footers";
	export default {
		name: "mainContent",
      components:{
			navBar,
          leftList,
          footers
      }
	}
</script>

<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  .content{
    width: 100vw;
    height: 81vh;
    display: flex;
    /*background-color: silver;*/
    .left{
      flex: 0.8;
      box-sizing: border-box;
      border-right: 1px solid silver;
      /*background-color: aquamarine;*/
    }
    .right{
      flex: 5;
      /*background-color: pink;*/
    }
  }
  .footer{
    width: 100vw;
    height: 10.5vh;
    /*background-color: silver;*/
  }
}
</style>