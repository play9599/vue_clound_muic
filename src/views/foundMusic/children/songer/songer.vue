<template>
    <div class="songer">
        <ul class="lists">
            <li>语种:</li>
            <li @click="btn(item,index)" v-for="(item,index) in ['全部','华语','欧美','日本','韩国','其他']" :class="{active:currIndex===index}">{{item}}</li>
        </ul>
        <ul class="lists">
            <li>分类:</li>
            <li @click="btns(item,index)" v-for="(item,index) in ['全部','男歌手','女歌手','其他']" :class="{active:currIndex_category===index}">{{item}}</li>
        </ul>
        <ul class="lists">
            <li>筛选:</li>
            <li @click="btnss(item,index)" v-for="(item,index) in ['热门','A','B','C','D','E','F','G','H','I','K','M','L','O','Q','R','S','T','U','V','W','S','Y','Z']" :class="{active:currIndex_letter===index}">{{item}}</li>
        </ul>
        <list :show="false" :show_count="false" :list="list">
            <template v-slot:img>
                <svg t="1622525933707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3444" width="24" height="24"><path d="M248.384 264.128C248.384 118.272 366.4 0 512 0s263.616 118.272 263.616 264.128S657.6 528.256 512 528.256 248.384 409.984 248.384 264.128z" p-id="3445" fill="#d81e06"></path><path d="M972.8 1024c-11.456-245.056-213.376-428.736-460.8-428.736S62.656 778.944 51.2 1024L972.8 1024z" p-id="3446" fill="#d81e06"></path></svg>
            </template>
        </list>
    </div>
</template>

<script>
    import {getSongDate} from "@/network/songer.js"
    import list from "@/components/common/list/list";
	export default {
		name: "songer",
      components:{
			  list
      },
      data(){
			  return {
			  	currIndex:0,
            currIndex_category:0,
            currIndex_letter:0,
            list:null
        }
      },
      methods:{
			  btn(item,index){
			      this.currIndex = index
			      let tupple = {
			      	  "华语":7,
                "全部":-1,
                "欧美":96,
                "日本":8,
                "韩国":16,
                "其他":0
            }
			console.log(item)
			      getSongDate(undefined,tupple[item],undefined).then(res=>{
				        this.list = res.artists
            })
        },
		  btns(item,index){
			  this.currIndex_category = index
		    let tupple = {
			    "男歌手":1,
            "女歌手":2,
            "乐队":3,
            "全部":-1
		    }
		    getSongDate(tupple[item],undefined,undefined).then(res=>{
			    this.list = res.artists
		    })
		  },
          btnss(item,index){
			  	  this.currIndex_letter = index
              let result = item === "热门"? -1: item
			          getSongDate(undefined,undefined,result).then(res=>{
				          this.list = res.artists
			          })
          }
      },
      created() {
			  getSongDate().then(res=>{
			      this.list = res.artists
        })
	  }
  }
</script>

<style scoped lang="scss">
.songer{
    font-size: .8rem;
    .lists{
        display: flex;
        flex-wrap: wrap;
        margin-top: 1em;
        li{
            padding: .5em;
            width: 5em;
            text-align: center;
            list-style: none;
        }
        .active{
            color: red;
            border-radius: 1em;
            background-color: #c8ccc9;
        }
    }
}
</style>