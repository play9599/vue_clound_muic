<template>
    <div class="MV">
        <router-link to="/foundMusic/playList"  tag="div" class="title">推荐MV ></router-link>
        <videos-list :list="list" :mv_show="true"></videos-list>
    </div>
</template>

<script>
	import {MV} from "@/network/personalized"
  import videosList from "@/components/common/videosList/videosList";
	export default {
		name: "MV",
      components:{
			  videosList
      },
      props:{
			  mv_show:Boolean
      },
        data(){
		    return{
		    	list:null,
                show:true,
                currIndex:0
            }
        },
        mounted() {
			MV().then(res=>{
				console.log(res.result)
				this.list = res.result
            })
		},
	}
</script>

<style scoped lang="scss">
.MV{
    margin-top: 40px;
    &>.title{
        color: #cccccc;
        &:hover{
            color: black;
        }
    }
    .list{
        margin-top: 20px;
        list-style: none;
        display: flex;
        .day{
                flex: 1;
                position: relative;
                box-sizing: border-box;
            margin-right: 20px;
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
                    height: 200px;
                }
                span{
                    display: block;
                    font-size: 13px;
                }

            }

    }
}
</style>