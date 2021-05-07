<template>
  <div class="player_box">
    <player></player>
    <progres></progres>
  </div>
</template>

<script>
  import player from "./player/player";
  import progres from "./progres/progres";
	export default {
		name: "playerBox",
      components:{
		      progres,
          player
      }
	}
</script>

<style scoped lang="scss">
.player_box{
  flex: 2;
  /*background-color: deeppink;*/
  display: flex;
  flex-direction: column;
}
</style>