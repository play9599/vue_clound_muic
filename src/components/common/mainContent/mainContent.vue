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
      <div class="form" v-if="shows">
          <div id="form">
              <h2>登录页面</h2>
              <div class="phone">
                  <svg t="1622559381534" class="icon" viewBox="0 0 1032 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3590" width="18" height="18"><path d="M494.870476 507.635572c160.939766 0 291.404485-111.604041 291.404485-249.237064 0-137.664224-130.464718-249.229265-291.404485-249.229265-160.924166 0-291.412285 111.56504-291.396684 249.229265 0 137.633024 130.472518 249.237065 291.404485 249.237064zM628.455241 590.737994H385.59087c-207.888657 0-376.433535 144.122719-376.433535 321.910733v20.779506c0 72.665868 168.544878 72.736069 376.433535 72.736069H628.455241c207.865256 0 376.402334-2.683239 376.402334-72.736069v-20.771705c0-177.795814-168.521478-321.918533-376.402334-321.918534z" p-id="3591"></path></svg>
                  <input type="text" ref="phone" placeholder="手机号码"><hr/>
              </div>
              <div class="password">
                  <svg t="1622559523779" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4430" width="18" height="18"><path d="M327.5 373.2c-17.5 0-31.8-14.2-31.8-31.8 0-60.7 23.6-117.8 66.6-160.7s100-66.6 160.7-66.6c102.4 0 192.6 68.9 219.3 167.6 4.6 16.9-5.4 34.4-22.3 39-16.9 4.6-34.4-5.4-39-22.3-19.3-71.1-84.2-120.7-158-120.7-90.3 0-163.7 73.4-163.7 163.7-0.1 17.6-14.3 31.8-31.8 31.8z" p-id="4431"></path><path d="M787 924.5H258.9c-83.7 0-151.8-68.1-151.8-151.8v-274c0-83.7 68.1-151.8 151.8-151.8H787c83.7 0 151.8 68.1 151.8 151.8v274c0 83.7-68.1 151.8-151.8 151.8zM258.9 410.4c-48.7 0-88.3 39.6-88.3 88.3v274c0 48.7 39.6 88.3 88.3 88.3H787c48.7 0 88.3-39.6 88.3-88.3v-274c0-48.7-39.6-88.3-88.3-88.3H258.9z" p-id="4432"></path><path d="M522.9 784c-81.8 0-148.3-66.5-148.3-148.3s66.5-148.3 148.3-148.3 148.3 66.5 148.3 148.3S604.7 784 522.9 784z m0-233c-46.7 0-84.7 38-84.7 84.7s38 84.7 84.7 84.7 84.7-38 84.7-84.7-38-84.7-84.7-84.7z" p-id="4433"></path></svg>
                  <input type="password" ref="password" placeholder="密码"><hr/>
              </div>
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
            shows:false
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
       this.$bus.$on("login",()=>{
       	    if (! sessionStorage.getItem("isLogin")){
				        this.show = true
            }
       })
	  },
      methods:{
			  btn(id,index){
			  	this.$store.commit("change_index",index)
			  	this.$play.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
			      this.$bus.$emit("playMusic",id)
        },
          login(){
			      phone(this.$refs.phone.value,this.$refs.password.value).then(res=>{
                // localStorage.setItem("token",res.token)
                sessionStorage.setItem("isLogin","true")
                this.show = false
                let date = [
					          res.profile.avatarUrl,
					          res.profile.nickname,
                    res.profile.userId
                ]
                this.$bus.$emit("user_img",date)
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
        /*height: 20em;*/
        border-radius: 2em;
        background-color: pink;
        display: flex;
        flex-direction: column;
        .phone,.password{
            flex: 2;
            margin:  auto;
            width: 100%;
            height: 10em;
            background-color: white;
            svg{
                margin-right: 1em;
            }
            input{
                outline: none;
                border: none;
            }

        }

        button{
            padding: 1em;
            flex: 1;
            outline: none;
            border: none;
            /*border-top-left-radius: 1em;*/
            /*border-top-right-radius: 1em;*/
        }
    }
}
</style>