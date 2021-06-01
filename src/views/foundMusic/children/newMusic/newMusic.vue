<template>
    <div class="newMusic">
        <div class="header">
            <ul>
                <li @click="btn(item,index)" v-for="(item,index) in ['全部','华语','欧美','韩国','日本']" :class="{active:currIndex===index}">{{item}}</li>
            </ul>
            <div class="button_group">
                <button>播放全部</button>
                <button>收藏全部</button>
            </div>
        </div>
        <div class="song-list">
            <ul>
                <li class="list" v-for="(item,index) in data" @click="music_click(item.id)">
                    <div class="song-date">
                        <span>{{index+1}}</span>
                        <img :src="item.picUrl" alt="" style="width: 4em;height: 4em;border-radius: 1em;">
                        <span>{{item.song.name}}</span>
                    </div>
                    <div class="song-data">
                        <span>{{item.song.artists[0].name}}</span>
                        <span>{{item.song.album.name}}</span>
                        <span>{{item.song.duration |form}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getNewMusic} from "@/network/songer";
    import {format} from "@/until";
	export default {
		name: "newMusic",
      data(){
			  return {
			  	currIndex:0,
            data:null
        }
      },
      methods:{
			  btn(item,index){
			  	    this.currIndex = index
        },
          music_click(id){
			  	  this.$bus.$emit("playMusic",id)
          }
      },
      created() {
			  getNewMusic().then(res=>{
			  	this.data = res.result
        })
	  },
      filters:{
			  form(val){
			  	return format(val)
        }
      }
  }
</script>

<style scoped lang="scss">
.header{
    overflow: hidden;
    ul{
        float: left;
        margin-top: 1em;
        display: flex;
        li{
            margin-left: 2em;
            list-style: none;
        }
        .active{
            font-weight: bolder;
        }
    }
    .button_group{
        float: right;
        button{
            margin-right: 2em;
            border:none;
            outline: none;
            padding: .5em;
            border-radius: .5em;
        }
    }
}
.song-list{
    margin-top: 1em;
    ul{
        .list{
            &:nth-child(odd){
                background-color: #b7bdcc;
            }
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            border-top-left-radius: 1em;
            border-top-right-radius: 1em;
            color: #d3dce6;
            margin-top: 2em;
            .song-date{
                flex: 1;
                * + *{
                    margin-left: 1em;
                }
            }
            .song-data{
                flex: 1;
                display: flex;
                align-self: flex-end;
                * + *{
                    margin-left: 8em;
                }
                span{
                    flex: 1;
                }
            }
        }
    }
}
</style>