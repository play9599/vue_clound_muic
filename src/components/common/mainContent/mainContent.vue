<template>
  <div class="container">
    <nav-bar></nav-bar>
    <div class="content">
      <div class="left">
        <left-list></left-list>
      </div>
      <div class="right">
         <div class="list" v-if="show">
             <ul>
                 <li v-for="(item,index) in list" @click="btn(item.id,index)">
                     <span>{{item.name}}</span>
                     <span>{{item.ar[0].name}}</span>
                     <span>{{item.al.name}}</span>
                 </li>
             </ul>
         </div>
        <router-view></router-view>
      </div>
    </div>
    <footers></footers>
  </div>
</template>

<script>
    import {song_detail} from "../../../network/song_detail";
	import navBar from "../navBar/navBar";
  import leftList from "../../content/leftList/leftList";
  import footers from "../footers/footers";
	export default {
		name: "mainContent",
      components:{
			navBar,
          leftList,
          footers,
      },
      data(){
			  return {
			  	lists :null
        }
      },
      computed:{
			  list(){
			  	return this.$store.getters.getting_list
        },
        show(){
			  	return this.$store.getters.show
        }
      },
      mounted() {
			this.lists = this.$store.getters.getting_list
	  },
      methods:{
			  btn(id,index){
			  	this.$store.commit("change_index",index)
			  	this.$play.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
			      this.$bus.$emit("playMusic",id)
        }
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
    box-sizing: border-box;
    overflow: hidden;
    /*background-color: silver;*/
    .left{
      flex: 0.8;
      box-sizing: border-box;
      border-right: 1px solid silver;
      /*background-color: aquamarine;*/
    }
    .right{
      flex: 5;
      overflow-y: scroll;
        position: relative;
        .list{
            position: fixed;
            overflow: auto;
            width: 30vw;
            height: 81%;
            background-color: #99a9bf;
            right: 0;
            top: 60px;
            z-index: 10000000;
            opacity: .5;
            box-sizing: border-box;
            ul{
                padding: 2em;
                li{
                    display: flex;
                    text-align: center;
                    margin: 1em;
                    span{
                        flex: 1;
                        text-align: left;
                    }
                }
            }
        }
    }
  }
  .footer{
    width: 100vw;
    height: 10.5vh;
    z-index: 2;
    background-color: #ececec;

  }
}

</style>