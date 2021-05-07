<template>
  <div class="footer">
    <song-data></song-data>
    <player-box></player-box>
    <operation></operation>
  </div>
</template>

<script>
  import songData from "./children/songData/songData";
  import playerBox from "./children/playerBox/playerBox";
  import operation from "./children/operation/operation";
	export default {
		  name: "footer",
      components:{
			    songData,
          playerBox,
          operation
      }
	}
</script>

<style scoped lang="scss">
.footer{
  width: 100vw;
  height: 100%;
  display: flex;
  /*background-color: aquamarine;*/
  box-sizing: border-box;
  border-top: 1px solid silver;
}
</style>