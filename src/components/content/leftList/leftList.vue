<template>
  <ul class="list" >
    <li v-for="(item,index) in y_list" @click.stop="currIndex_btn(item.path,index,item.children)" :class="{active:isActive(index)}">{{item.name}}</li>
    <ul v-for="items in detail" class="detail">
      <p>{{items.p}}</p>
      <ul v-for="item in items.ul">
        <li  @click="currIndex_btn(item.path)">{{item.name}}</li>
      </ul>
    </ul>
    <div class="qrcode" v-if="login_show">
        <h2>扫码登录</h2>
        <img :src="img_url" alt="" style="">
    </div>
  </ul>
</template>

<script>
    import {qrkey,create,getLoginCode,getDate} from "@/network/login";
	export default {
		name: "leftList",
    //  点击后导航菜单边样式的功能没有实现
    data(){
			return{
				y_list:[
            {name:"发现音乐",path:"/foundMusic",children:[
                    {name:"个性推荐",path:"/foundMusic/recommend"},
                    {name:"歌单",path:"/foundMusic/playList"},
                    {name:"主播单台",path:"/foundMusic/radioStation"},
                    {name:"排行榜",path:"/foundMusic/charts"},
                    {name:"歌手",path:"/foundMusic/songer"},
                    {name:"最新音乐",path:"/foundMusic/music"},
                ]
            },
            {name:"视频",path:"/videos",children: [
                    {name:"视频",path:"/videos/video"},
                    {name:"MV",path:"/videos/Mv"}
                ]
            },
            {name:"朋友",path:"/friend",children: ["动态"]},
            {name:"私人FM",path:"/detailFm",children: [""]},
        ],
        detail:[
			        {
				        p:"我的音乐",
                //  "本地音乐","下载管理"
				        ul:[
                    {name:"本地音乐",path:"/music"},
                    {name:"下载管理",path:"/download"}
                ]
			        },
			        {
				        p:"创建的歌单",
				        ul:[{name:"我喜欢的音乐",path:"/myLove"}]
			        },
          ],
		    currIndex:0,
				login_show:false,
                img_url:undefined,
                key:"",
                user_data: null
      }
    },
    methods:{
		currIndex_btn(path,index,value){
        //避免重复点击控制台报错
            if (this.$route.path === path) return false
        //将各自的index进行存储，方便下面样式激活判断
            this.currIndex = index
        //跳转路由
		    this.$router.push(path)
        //将二级导航数据放入vuex中
		// 	console.log(value)
            this.$store.commit("update_nav_list",value)
        // this.$refs.ul_list.children[0].click()
    },
    isActive(index){
			return this.currIndex === index
    },
    //二维码登录的方法
	      async qrCode(){
	          let {data:{unikey}} = await qrkey()
            let {data:{qrimg}} = await create(unikey)
            this.img_url = qrimg
            let time = await setInterval( async ()=>{
				         let {code,message,cookie} = await getLoginCode()
				        if (code === 803){
				        	// localStorage.setItem("token",res.cookie)
				        	sessionStorage.setItem("isLogin","true")
					        let {data:{profile}} =  await getDate()
                   this.user_data = profile
				        	clearInterval(time)
				        	this.login_show = false
				        }else if (code === 802){
				        	console.log(message)
				        }else if(code === 801){
					          console.log(message)
                }else{
					          alert(message)
					          this.qrCode()
                }
            },1000)
    }
    },
     mounted() {
                // let user = this.user_data
				this.$bus.$on("login",(msg)=>{
					if (sessionStorage.getItem("isLogin") === null){
						console.log("执行登录操作")
						// sessionStorage.setItem("isLogin","true")
            this.$bus.$emit("bc","http://p1.music.126.net/hP0lEwX9end8vwfUT-1nhQ==/109951165310318199.jpg")
						// this.login_show = true;
            // this.qrCode()
        //      这种方法会进入另外一种模式
			  // create(this.key).then(res=>{
				//   // res.qrimg
				//   this.img_url = res.data.qrimg
				//   let time = setInterval(()=>{
				// 	  getLoginCode(this.key).then(res=>{
				// 		  // console.log(res.code)
				// 		  if (res.code === 803){
				// 			  // localStorage.setItem("token",res.cookie)
				// 			  sessionStorage.setItem("isLogin","true")
				// 			  let {data:{profile}} =  getDate()
				// 			  this.user_data = profile
				// 			  clearInterval(time)
				// 			  this.login_show = false
				// 		  }else if (res.code === 802){
				// 			  alert("扫码成功请在手机上确认")
				// 		  }
				// 	  })
				//   },1000)
			  // }).catch(err=>{
			  //     console.log(err)
        // })

				// 		qrkey().then(res=>{
				// 			this.key = res.data.unikey
        //        return create(this.key)
				// 		}).then(res=>{
				//         this.img_url = res.data.qrimg
				// let time = setInterval(()=>{
				// 		  getLoginCode(this.key).then(res=>{
				// 			  if (res.code === 803){
				// 	          this.login_show = false
				// 			  	clearInterval(time)
				// 				  sessionStorage.setItem("isLogin","true")
				// 				  getDate().then(res=>{
				// 	  console.log(res.data)
				// 	          this.user_data = res.data
        //           })
        //
				// 			  }
				// 		  })
				// 	  },1000)
				// 	}).catch(err=>{
				// 		alert(err)
        //     })


                    }else {
						console.log("执行跳转")
						console.log(this.user)
						this.$router.push({path:"/userDate",query:{id: this.user_data.id || 322406014}})
					}
				})
   //      在浏览器刷新之前保留数据到客服端存储
   //       window.addEventListener("beforeunload",()=>{
   //       	      localStorage.setItem("article_index",this.currIndex)
   //       },false)
	 },
    //   created() {
    //     this.currIndex = parseInt(localStorage.getItem("article_index"))
	  // }
  }

</script>

<style scoped lang="scss">
.list{
  margin-left: 5px;
  .active{
    font-weight: bolder;
    background-color: hsla(315, 3%, 25%, 0.27);
  }
  li{
    padding: 10px;
    border-radius: 10px;
    list-style: none;
    &:hover{
      background-color: silver;
    }
  }
  .detail{
    padding: 10px;
    margin-top: 5px;
    p{
      font-size: small;
      color: silver;
      /*border-bottom: 2px solid #cccccc;*/
    }
  }
   .qrcode{
       box-sizing: border-box;
       text-align: center;
       box-shadow: #cccccc 0 -3px 4px 3px ;
       img{
           height: 80px;
       }
   }
}
</style>