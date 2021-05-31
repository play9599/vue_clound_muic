<template>
  <div class="menu" v-if="list_data[0] !== ''">
    <ul ref="ul_list" class="menu_list" >
      <li v-for="(item,index) in list_data" @click="btn(index,item.path)" :class="{active:currIndex === index}">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
	export default {
		//这里有功能没有实现    切换左边导航栏的时候右边二级导航栏虽然样式有  但是具体的路由没有变
		name: "sencondMenu",
        data(){
			return{
                currIndex:0,
            }
        },
    //   created() {
		// 	this.currIndex = parseInt(localStorage.getItem("currIndex"))
	  // },
        computed:{
			    list_data(){
				    return this.$store.getters.getting_nav_list
                }
        },
        methods:{
			btn(index,path){
				this.currIndex = index
		  console.log(path)
				if (this.$route.path === path) return false
                this.$router.push(path)
            }
        },
    //   mounted() {
		// 	  window.addEventListener("beforeunload",()=>{
		// 	  	localStorage.setItem("currIndex",this.currIndex)
    //     },false)
	  // }
  }
</script>

<style scoped lang="scss">
.menu{
  height: 60px;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 9999;
  ul{
    display: flex;
    .active{
        border-bottom: 4px solid red;
        font-weight: bolder;
    }
    li{
      list-style: none;
      padding: 10px;
      margin: 10px;
    }
  }
}
</style>