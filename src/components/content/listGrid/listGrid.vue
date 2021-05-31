<template>
    <div class="gird">
        <div class="article">
            <div class="listDetail" :ref="txt_name">{{name}}></div>
            <ul class="list">
                <li v-for="item in list" @click="li_click(item)">{{item}}</li>
            </ul>
        </div>
        <ul>
            <li v-for="item in lists" @click="btn(item.id)">
                <p>{{item.playCount | playCount}}</p>
                <img :src="item.picUrl || item.coverImgUrl" :alt="item.copywriter":title="item.copywriter">
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: "listGrid",
      props:{
        //标签
			  list:null,
          //数据
          lists:null,
          // 作用于dom的refs名字
          txt_name:"",
          //初始名字
          name:""
      },
      filters:{
		  playCount(value){
			  return (Math.floor(value/10000) +"万")
		  }
	  },
      methods:{
		  btn(id){
			  // console.log("点我")
			  this.$router.push({path:"/songListDetails",query:{id:id}})
		  },
		  li_click(cat){
			  this.$refs[this.txt_name].innerText = `${cat}>`
        this.$emit("cat",cat)
		  console.log(cat)
		    if (this.$route.path === "/videos/video"){
		    	this.$bus.$emit("mv_type",cat)
        }
		  }
	  }
	}
</script>

<style scoped lang="scss">
    .article{
        overflow: hidden;
        padding: 1em;
        .listDetail{
            float: left;
            height: 2em;
            text-align: center;
            width: 5em;
            line-height: 2em;
            border-radius: .5em;
            border: 2px solid #cccccc;
            &:hover{
                background-color: #cccccc;
            }
        }
        .list{
            float: right;
            display: flex;
            width: 40vw;
            position: relative;
            top: 10px;
            li{
                flex: 1;
                font-size: .5rem;
                color: #cccccc;
                list-style: none;
                line-height: 2em;
                margin-left: 1em;
                &:hover{
                    color: black;
                }
            }
        }
    }
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li{
            flex: 25%;
            position: relative;
            margin-top: 10px;
            cursor: pointer;
            p{
                position: absolute;
                right: 118px;
                top: 10px;
                color: #cccccc;
            }
            img{
                width: 200px;
                height: 200px;
                display: block;
                background-color: #ffa772;
                background-size: cover;
                margin-bottom: 10px;
                border-radius: 10px;
            }
            span{
                font-size: small;
                font-weight: normal;
                display: inline-block;
                width:200px;
                padding: 1px;
                text-align: center;
                &:nth-child(1){
                    position: absolute;
                    top: 0;
                    z-index: 2;
                    border-radius: 10px;
                    transition: all 2s ease-in-out;
                }
            }
        }
    }
</style>