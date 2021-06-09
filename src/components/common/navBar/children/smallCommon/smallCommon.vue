<template>
  <div class="content">
    <img class="sculpture" @click="login_btn" :src="img"/>
    <div class="login_txt">
        <p style="display: inline-block">{{username}}</p>
    <span></span>
    </div>
    <a href="/pay">开通vip</a>
  </div>
</template>

<script>
	export default {
		name: "smallCommon",
      data(){
			  return {
			  	user_img:null,
            default:"http://bpic.588ku.com/element_origin_min_pic/01/48/72/6057443a029cc58.jpg",
            default_name:"未登录",
			      user_name:null,
            userId:undefined
        }
      },
        methods:{
			login_btn(){
				this.$bus.$emit("login",this.userId)
            }
        },
      mounted() {
		  this.$bus.$on("user_img",val=>{
		  	this.user_img = val[0]
          this.user_name = val[1]
          this.userId = val[2]
      })
	  },
      computed:{
			  img(){
			  	return this.user_img|| this.default
        },
          username(){
			  	return this.user_name ||this.default_name
          }
      }
  }
</script>

<style scoped lang="scss">
$hover_color:#ffff;
@mixin hover{
  &:hover{
    color: $hover_color;
  }
}
.content{
  flex: 2;
  .sculpture{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    position: relative;
    top: 5px;
    background-color: aquamarine;
  }
  .login_txt{
    color: silver;
    margin-left: 10px;
    cursor: pointer;
    @include hover;
    span{
      width: 0;
      height: 0;
      display: inline-block;
      border-width: 8px;
      position: relative;
      top: 7px;
      border-style: solid;
      border-color: silver transparent transparent transparent;
      &:hover{
        border-color: $hover_color transparent transparent transparent;
      }
    }
  }
  >a{
    color: silver;
    margin-left: 10px;
    @include hover;
  }
}
</style>