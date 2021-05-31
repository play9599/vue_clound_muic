<template>
   <div class="only">
       <router-link to="/foundMusic/playList"  tag="div" class="title">独家放送 ></router-link>
       <ul class="list">
           <li v-for="item in url_list" @click="btn(item.id)">
               <img :src="item.picUrl" :alt="item.copywriter" :title="item.copywriter">
               <span>{{item.name}}</span>
           </li>
       </ul>
   </div>
</template>

<script>
	import {only} from "@/network/personalized"
	export default {
		name: "onlyOne",
        data(){
			return{
				url_list:null
            }
        },
        mounted() {
			only().then(res=>{
				// console.log(res.result)
				this.url_list = res.result
            })
		},
      methods:{
			  btn(id){
			  	this.$router.replace({path:"/movie",query:{id}})
        }
      }
	}
</script>

<style scoped lang="scss">
    .title{
        color: #cccccc;
        &:hover{
            color: black;
        }
    }
    .list{
        display: flex;
        li{
            cursor: pointer;
            flex: 1;
            list-style: none;
            box-sizing: border-box;
            margin-right: 2.5em;
            img{
                width: 100%;
                padding: 10px;
                height: 150px;
                background-size: cover;
                border-radius: 1em;
            }
            span{
                display: block;
            }
        }
    }
</style>