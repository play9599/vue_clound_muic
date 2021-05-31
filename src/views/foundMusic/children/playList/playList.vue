<template>
        <div class="playList">
            <div class="play_nav">
                <img src="@/assets/image/beatiful.jpg" alt="">
                <div class="des">
                    <span>精品歌单</span>
                    <p>《美国乡村乐图鉴和简史》</p>
                    <span>美国乡村乐图鉴和简史</span>
                </div>
            </div>
            <list-grid
                    :list="list"
                    :lists="lists"
                    txt_name="txt"
                    name="全部歌单"
                    @cat="list_cat"
            ></list-grid>
        </div>
</template>

<script>
    import {personalized} from "@/network/personalized";
    import {hotSong} from "@/network/song_detail";

    import listGrid from "@/components/content/listGrid/listGrid";
	export default {
		name: "playList",
      components:{
			  listGrid
      },
        data(){
			return{
				lists:null,
				list:["华语","流行","摇滚","民谣","电子","另类/独立","轻音乐","综艺","影视原声","ACG"]
            }
        },
        mounted() {
			personalized(20).then(res=>{
				this.lists = res.result
            })
		},
      methods:{
		    list_cat(val){
			      hotSong(undefined,val).then(res=>{
			      	this.lists = res.playlists
            })
        }
      }

	}
</script>

<style scoped lang="scss">
.playList{
    padding: 2em;
    .play_nav{
        width: 70vw;
        height: 30vh;
        background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
        border-radius: 1em;
        background-size: cover;
        overflow: hidden;
        img{
            margin: 1.5em;
            border-radius: 1em;
            width: 15em;
            float: left;
        }
        .des{
            margin: 3em;
            span{
                &:nth-child(1){
                    padding: .5em;
                    border-radius: 1em;
                    color: yellow;
                    border: 3px solid yellow;
                }
                &:last-child{
                    font-size: .8rem;
                    color: #c8ccc9;
                }
            }
            p{
                margin-top: 1.5em;
                font-size: 1.2rem;
                color: white;
            }
        }
    }

}
</style>