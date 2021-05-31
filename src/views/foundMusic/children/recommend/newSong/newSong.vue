<template>
    <div class="new">
        <router-link to="/foundMusic/playList"  tag="div" class="title">最新音乐 ></router-link>
        <ul class="list">
            <li v-for="itme in url_list" @click="btn(itme.id)">
                <img :src="itme.picUrl" alt="">
                <p class="song_name">{{itme.name}}</p>
                <p >{{itme.song.artists[0].name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
	import {newSongList} from "@/network/personalized"
	export default {
		name: "newSong",
        data(){
			return{
				url_list:null
            }
        },
        mounted() {
			newSongList().then(res=>{
				this.url_list = res.result
            })
		},
        methods:{
			btn(id){
				// https://music.163.com/song/media/outer/url?id=id.mp3
                this.$bus.$emit("playMusic",id)
            }
        }
	}
</script>

<style scoped lang="scss">
    .new{
        .title{
            color: #cccccc;
            &:hover{
                color: black;
            }
        }
        .list{
            display: flex;
            flex-wrap: wrap;
            li{
                flex: 33%;
                list-style: none;
                box-sizing: border-box;
                overflow: hidden;
                margin-top: 20px;
                &:hover{
                    background-color: #cccccc;
                    border-radius: 1em;
                }
                img{
                    width: 60px;
                    height: 60px;
                    float: left;
                    border-radius: 1em;
                }
                .song_name{
                    color: black;
                }
                p{
                    margin-left: 4em;
                    padding: .2em;
                    color: #b6b6b6;
                }

            }
        }
    }

</style>