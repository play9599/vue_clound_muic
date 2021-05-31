<template>
        <div class="song_list_details">
            <div class="detail_nav">
                <img :src="playList.coverImgUrl" alt="">
                <div class="des">
                    <div class="name">
                        <span>歌单</span>
                        <p>{{playList.name}}</p>
                    </div>
<!--                    用户基本信息-->
                    <div class="auth">
                        <div class="auth_date">
                            <img :src="playList.creator.avatarUrl" alt="" style="width: 20px;height: 20px;border-radius: 50%;">
                            <a href="javascript:;" @click="toBack(playList.creator.userId)">{{playList.creator.nickname}}</a>
                        </div>
                        <span>{{playList.createTime| time}}创建</span>
                    </div>
                    <div class="button_group">
                       <div class="button" @click="add_all(playList.trackIds)">播放全部</div>
                       <div class="button">收藏 {{playList.subscribedCount}}</div>
                       <div class="button">分享 {{playList.shareCount}}</div>
                       <div class="button">下载全部</div>
                    </div>
                    <p>标签: <span v-if="playList.length>0">{{playList.tags[0]}}/{{playList.tags[1]}}/{{playList.tags[2]}}</span><span v-else>无</span></p>
                    <p><span>歌曲:{{playList.trackCount}}</span><span>播放:{{playList.playCount | play}}</span></p>
                    <p class="description">简介:{{playList.description}}</p>
                </div>
            </div>
            <div class="detail_list">
                <div class="row">
                    <div class="cell"> </div>
                    <div class="cell">音乐标题</div>
                    <div class="cell">歌手</div>
                    <div class="cell">专辑</div>
                    <div class="cell">时长</div>
                </div>
<!--                trackIds   为全部歌曲-->
                <div class="row" v-for="(item,index) in songList" @click="play(item.id)">
                    <div class="cell">
                        <span>{{index+1|index}}</span>
                        <a href="javascript:;" title="喜欢" @click.stop="btn">
                            <svg v-if="show"   t="1620373256612" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1426" width="24" height="24"><path d="M364.2 174.3c38.3 0 76 10 109 28.8 12.3 7 26 10.6 39.7 10.6 13.5 0 27-3.4 39.2-10.3 32.7-18.4 70-28.1 107.8-28.1 58.8 0 114 22.9 155.5 64.4 40.7 40.7 63.5 94.7 64.4 152.2 0.9 57.4-20.2 112-59.4 153.7-1 1.1-2.1 2.3-3 3.4-0.4 0.5-0.6 0.7-0.7 0.7l-297 297c-1.9 1.9-4.3 2.9-7.1 2.9-2.7 0-5.1-1-7.1-2.9L209.3 550.5l-0.7-0.7-0.3-0.3c-41.3-41.5-64.1-96.6-64.1-155.2 0-58.8 22.9-114 64.4-155.6s96.8-64.4 155.6-64.4m0-80c-165.7 0-300 134.3-300 300 0 82.6 33.4 157.4 87.4 211.7 0.1 0.2 0.3 0.3 0.4 0.5l297 297c17.6 17.6 40.6 26.4 63.6 26.4s46.1-8.8 63.6-26.4l297-297c1.9-1.9 3.8-4 5.5-6C989.1 482.8 986.8 298 872 183.1c-58.6-58.6-135.3-87.9-212.1-87.9-50.8 0-101.5 12.8-147 38.4-43.9-25-94.6-39.3-148.7-39.3z" fill="#e6e6e6" p-id="1427"></path></svg>
                            <svg v-else t="1620373458346" class="icon" viewBox="0 0 1151 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1749" width="24" height="24"><path d="M1138.797862 345.839475c-6.397741 147.148038-70.375149 249.511891-191.932224 371.068967-25.590963 19.193222-44.784186 44.784186-83.17063 70.375148-12.795482 12.795482-70.375149 57.579667-89.568371 76.77289-12.795482 12.795482-38.386445 31.988704-63.977408 51.181926-6.397741 0-6.397741 0-6.397741 6.397741-19.193222 12.795482-38.386445 31.988704-63.977408 44.784186-12.795482 6.397741-25.590963 19.193222-25.590963 19.193222l-25.590964 19.193223-31.988704-19.193223c-6.397741-6.397741-19.193222-12.795482-31.988704-19.193222-25.590963-12.795482-44.784186-31.988704-70.375148-44.784186-6.397741-6.397741-12.795482-6.397741-12.795482-12.795481-25.590963-19.193222-51.181926-38.386445-70.375149-51.181927-19.193222-12.795482-70.375149-63.977408-76.772889-63.977408-31.988704-25.590963-51.181926-44.784186-76.77289-63.977408C76.77289 601.749107 12.795482 492.987514 6.397741 339.441735c-12.795482-319.88704 345.478003-454.239597 563.00119-223.920928 223.920928-230.318669 582.194413-95.966112 569.398931 230.318668z" fill="#d81e06" p-id="1750"></path></svg>
                        </a>
                        <a href="javascript:;" title="下载">
                            <svg t="1620881973684" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3459" width="24" height="24"><path d="M73.808006 943.607018 73.808006 878.910531l0-64.696488 0-64.696488 97.040127 0 0 64.696488 679.270654 0 0-64.696488 97.04115 0 0 64.696488 0 64.696488 0 64.696488L73.808006 943.607018 73.808006 943.607018zM170.848133 361.363188l226.425939 3.298116L397.274072 70.248947l226.425939 0 0 291.218618 226.424916-0.097214L513.971911 717.180056 170.848133 361.363188 170.848133 361.363188z" p-id="3460"></path></svg>
                        </a>
                    </div>
                    <div class="cell">{{item.name}}</div>
                    <div class="cell">{{item.ar[0].name}}</div>
                    <div class="cell">{{item.al.name}}</div>
                    <div class="cell">{{item.dt| timeFormat}}</div>
                </div>
            </div>
        </div>
<!--    打造一个模板将id传进来   进行数据渲染-->
</template>

<script>
    import {songListDetail,hotSong,details} from "@/network/song_detail";
    import {format} from "@/until";
	export default {
		name: "songListDetails",
        data(){
			return{
				show:true,
                playList: null,
          songList:null
            }
        },
        methods:{
			btn(){
				this.show = !this.show
            },
            play(id){
				this.$bus.$emit("playMusic",id)
            },
			toBack(id){
				this.$router.replace({path:"/userDate",query:{id}})
            },
            add_all(value){
                let list = []
                value.splice(20,value.length)
				        value.forEach(item=>{
				        	list.push(item.id)
                });
				        let str_list = list.join(",")
                details(str_list).then(res=>{
					  let {songs} = res
					  this.$store.commit("add",songs)
					this.$bus.$emit("playMusic",this.$store.state.song_list[0].id)
				})
            }
        },
        mounted() {
			//处理用户点击传入的id，然后请求对应的数据
            let list = []
			songListDetail(this.$route.query.id).then(res=>{
		  console.log(res)
				let {playlist} = res
				this.playList = playlist
        Array.from(playlist.trackIds).forEach(item=>{
            list.push(item.id)
        })
		  console.log(list)
        details(list.join(",")).then(res=>{
			     let {songs} = res
            this.songList = songs
        })
      })
		},
        filters:{
			time(value){
				let timer = new Date(value)
                let year = timer.getFullYear()
                let mouth = timer.getMonth()
                let date = timer.getDate()
                return `${year}-${mouth}-${date}`
            },
			play(value){
				return Math.round(value /10000) +"万"
            },
			index(val){
				return Math.floor( val / 10) === 0 ? `0${val}`:val
            },
			timeFormat(val){
			  return	format(val)
			}
        },

	}
</script>

<style scoped lang="scss">
.song_list_details{
    color: #99a9bf;
    .detail_nav{
        overflow: hidden;
        padding: 3em;
        img{
            float: left;
            width: 15em;
            height: 15em;
            border-radius: 2em;
            margin-right: 1em;
        }
        .des{
            .name{
                span{
                    padding: .4em;
                    color: red;
                    border: 2px solid red;
                    border-radius: .8em;
                }
                p{
                    display: inline-block;
                    font-weight: bolder;
                    margin-left: 1em;
                    font-size: 1.5rem;
                    color: rgb(182, 182, 182);
                }
            }
            p{
                margin-top: .5em;
                span{
                    &:nth-child(2){
                        margin-left: 1em;
                    }
                }
            }
            .button_group{
                overflow: hidden;
                margin-top: 20px;
                margin-bottom: 1em;

                .button{
                    float: left;
                    color: white;
                    margin-right: 3em;
                    border-radius: 2em;
                    padding: 1em;
                    background-color: #ffa772;
                }
            }
            .auth{
                margin-top: 20px;
                .auth_date{
                    display: inline-block;
                    a{
                        &:hover{
                            color: #99a9bf;
                        }
                    }
                }
                span{
                    margin-left: 2em;
                }

            }
        }

    }
    .detail_list{
        display: table;
        width: 100%;
        .row{
            &:hover{
                background-color: #cccccc;
            }
            display: flex;
            &:nth-child(1){
                .cell{
                    &:first-child{
                        visibility: hidden;
                    }
                }
            }
            .cell{
                flex: 1;
            }
        }
        .cell{
            padding: .5em;
            display: table-cell;
            &:nth-child(2){
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            a{
                position: relative;
                top: .5em;
                margin-left: 1em;
            }
        }
    }
    .description{
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
}
</style>