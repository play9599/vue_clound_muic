<template>
    <div class="ranking">
        <h2>官方榜</h2>
        <div id="list" v-for="(item,index) in government" :key="index">
            <img @click="btn(item.id)" :src="item.coverImgUrl" alt="图片" style="width: 15em;height: 11em;border-radius: 1em;">
            <ul>
                <li class="lists" v-for="(items,index) in songList.slice(index*5,(index+1)*5)">
                    <div class="time">
                        <span>{{index+1}}</span>
                        <span>400%</span>
                        <span @click="play(items.id)">{{items.name}}</span>
                    </div>
                    <div class="songer">
                            <span v-for="songer in items.ar" class="text">{{items.ar.length>1? songer.name+" /" : songer.name}}</span>
                    </div>
                </li>
                <span class="any" @click="btn(item.id)">查看全部></span>
            </ul>
        </div>
        <h2>全球榜</h2>
        <list
            :show="false"
            :list="list"
        ></list>
    </div>
</template>

<script>
    import {getDate} from "@/network/ranking";
    import {songListDetail} from "@/network/song_detail";

    import list from "@/components/common/list/list";
	  export default {
		name: "rankingList",
        components:{
			      list
        },
      data(){
			  return {
			      government:null,
            list:null,
            songList:[]
        }
      },
      created() {
			  getDate().then(res=>{
			  	this.government = res.list.slice(0,5)
            this.government.forEach(item=>{
                songListDetail(item.id).then(res=>{
					          this.songList.push(...res.playlist.tracks.slice(0,5))
                })
            })
            this.list = res.list.slice(4)
        })

	  },
      methods:{
			  btn(id){
			  	this.$router.replace({path:"/songListDetails",query:{id}})
        },
        play(id){
			  	this.$bus.$emit("playMusic",id)
        }
      }
  }
</script>

<style scoped lang="scss">
.ranking{
    h2{
        margin-top: 1em;
    }
    padding: 1em;
    #list{
        margin-top: 2em;
        display: flex;
        ul{
            flex: 1;
            margin-left: 5em;
            li{
                list-style: none;
                padding: .5em;
                line-height: 1em;
               overflow: hidden;
                color: #c7c9cc;
                &:nth-child(odd){
                    background-color: #fffae5;
                }
                &:hover{
                    background-color: silver;
                }
                .time{
                   float: left;
                    & span{
                        &:nth-child(1){
                            color: red;
                        }
                        &+span{
                            margin-left: 1em;
                            font-size: .8rem;
                        }

                    }
                }
                .songer{
                    float: right;
                    &>.text{
                        font-size: .5rem;
                    }
                }
            }
        }
    }
    .any{
        color: #c8ccc9;
    }
}
</style>