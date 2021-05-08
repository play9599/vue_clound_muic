<template>
  <ul class="list">
    <li v-for="(item,index) in y_list" @click.stop="currIndex_btn(item.path,index)" :class="{active:isActive(index)}">{{item.name}}</li>
    <ul v-for="items in detail" class="detail">
      <p>{{items.p}}</p>
      <ul v-for="item in items.ul">
        <li  @click="currIndex_btn(item.path)">{{item.name}}</li>
      </ul>
    </ul>
  </ul>
</template>

<script>
	export default {
		name: "leftList",
    //  点击后导航菜单边样式的功能没有实现
    data(){
			return{
				y_list:[
            {name:"发现音乐",path:"/foundMusic"},
            {name:"视频",path:"/videos"},
            {name:"朋友",path:"/friend"},
            {name:"私人FM",path:"/detailFm"},
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
		    currIndex:0
      }
    },
    methods:{
		currIndex_btn(path,index){
        //避免重复点击控制台报错
        if (this.$route.path === path) return false
        this.currIndex = index
		    this.$router.push(path)
    },
    isActive(index){
			return this.currIndex === index
    }
    },
	}
</script>

<style scoped lang="scss">
.list{
  margin-left: 5px;
  .active{
    font-weight: bolder;
  }
  li{
    padding: 10px;
    border-radius: 6%;
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
}
</style>