<template>
    <div class="song_list">
        <router-link to="/foundMusic/playList"  tag="div" class="title">推荐歌单 ></router-link>
        <list :show="true" :list="list" :center="true"></list>
    </div>
</template>

<script>
    import list from "@/components/common/list/list";
	import {personalized} from "@/network/personalized"
	export default {
		name: "songList",
        components:{
		    list
        },
        data(){
			return{
				list:null
            }
        },
		created() {
			personalized().then(res=>{
				this.list = res.result
			})
		},
	}
</script>

<style scoped lang="scss">
.song_list{
    font-weight: bolder;

    &>.title{
        color: #cccccc;
        &:hover{
            color: black;
        }
    }
}
</style>