<template>
  <div>
      <div class="container">
          <nav-bar></nav-bar>
          <div class="content">
              <div class="left">
                  <left-list></left-list>
              </div>
              <div class="right">
                  <div class="list" v-if="show">
                      <ul>
                          <li><span>音乐名</span><span>歌手</span><span>专辑</span></li>
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
      <div class="form" style="display: none">
          <div id="form">
              手机号码<input type="text" ref="phone"><hr/>
              密码<input type="password" ref="password"><hr/>
              <button @click="login">登录</button>
          </div>
      </div>
  </div>
</template>

<script>
    import {song_detail} from "../../../network/song_detail";
    import {phone} from "@/network/login";
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
			  	lists :null,
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
        },
          login(){
			      phone(this.$refs.phone.value,this.$refs.password.value).then(res=>{
				        console.log(res)
            })
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
    height: calc(100vh - 10.5vh - 60px);
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
      position: absolute;
      bottom: 0;
    height: 10.5vh;
    z-index: 2;
    background-color: #ececec;

  }
}
.form{
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #d3dce6;
    z-index: 99999999999999999999;
    opacity: .7;
    display: flex;
    #form{
        margin: auto;
        text-align: center;
        width: 25em;
        height: 20em;
        border-radius: 2em;
        background-color: pink;
    }
}
</style>