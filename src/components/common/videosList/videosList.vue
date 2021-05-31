<template>
    <ul class="list" ref="videoList">
<!--        这里的逻辑需要在处理一下-->
        <li class="day" v-for="(item,index) in list" :key="item.id" @mouseenter="enter(index)" @mouseleave="leave(index)" @click="to(item.id)">
            <span v-if="mv_show" :class="{active:show && currIndex === index}" style="font-size: 12px;background-color: black;padding: 5px;text-align: center;color: white;border-radius: 5px 5px 0 0">{{item.copywriter}}</span>
            <img :src=" item.picUrl || item.cover "/>
            <span>{{item.name}}</span>
            <span>{{item.artistName}}</span>
        </li>
    </ul>
</template>

<script>
    import {recommend} from "@/network/video.js"
	export default {
		name: "videosList",
      props:{
			  list:null,
          mv_show: Boolean
      },
      data(){
			  return{
			      show:true,
			      currIndex:0
        }
      },
	  methods:{
		  enter(index){
			  this.show = false
          this.currIndex = index
		  },
		  leave(index){
			  this.show = true
		  this.currIndex = index
		  },
        to(id){
			      this.$router.replace({path:"/movie",query:{id:id}})
        }
	  },
      mounted() {
			  this.$bus.$on("mv_type",type=>{
            recommend(type).then(res=>{
            	let {data} = res
                this.list = data
            })
        })
	  }
  }
</script>

<style scoped lang="scss">
    .list{
        margin-top: 20px;
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 1em;
        .day{
            flex: 1;
            position: relative;
            box-sizing: border-box;
            margin-right: 20px;
            margin-top: 3em;
            text-align: center;
            .active{
                display: none;
            }
            span{
                &:nth-child(1){
                    position: absolute;
                    top: 0;
                    width: 96.5%;
                }
                &:nth-child(4){
                    color: #cccccc;
                }
            }
            img{
                background-size: cover;
                border-radius: 5px;
                width: 100%;
                height: 100%;
            }
            span{
                display: block;
                font-size: 13px;
            }

        }

    }
</style>