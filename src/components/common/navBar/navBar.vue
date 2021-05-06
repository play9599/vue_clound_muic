<template>
  <div class="navBar">
    <div class="content">
      <logo></logo>
      <left-right></left-right>
      <small-common></small-common>
    </div>
  </div>
</template>

<script>
  import logo from "./children/logo/logo";
  import leftRight from "./children/leftRight/leftRight";
  import smallCommon from "./children/smallCommon/smallCommon";
	export default {
		name: "navBar",
    components:{
			logo,
        leftRight,
        smallCommon
    }
	}
</script>

<style scoped lang="scss">
.navBar{
  width: 100vw;
  height: 60px;
  background-color: red;
  display: flex;
  .content{
    display: flex;
    margin: auto;
    width: 95%;
    height: 37px;
    line-height: 37px;
    /*background-color: aqua;*/
  }
}
</style>