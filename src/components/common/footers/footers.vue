<template>
  <div class="footer">

    <song-data :date="song_data"></song-data>
    <player-box></player-box>
    <operation></operation>
  </div>
</template>

<script>
  import songData from "./children/songData/songData";
  import playerBox from "./children/playerBox/playerBox";
  import operation from "./children/operation/operation";

  import {detail} from "@/network/song_detail";
  export default {
		  name: "footer",
      components:{
			    songData,
          playerBox,
          operation
      },
      data(){
		  	return{
		  		song_data:null
            }
      },
      mounted() {
		  	detail().then(res=>{
				this.song_data = res.songs[0]
				console.log(this.song_data)
            })
            this.$bus.$on("playMusic",(id)=>{
            	detail(id).then(res=>{
					this.song_data = res.songs[0]
                })
            })
	  },
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