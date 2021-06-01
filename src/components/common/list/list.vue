<template>
    <div class="list">
        <ul>
            <li ref="day" class="day"v-if="show">
                <span class="active" style="font-size: 12px;background-color: black;padding: 5px;text-align: center;color: white">根据你的音乐口味生成每日更新</span>
                <img src="" alt="">
                <span :class="{center:center}">每日推荐</span>
            </li>
            <!--                这里可以进行组件抽离-->
            <li v-for="item in list" @click="btn(item.id)">
                <p v-if="show_count">{{item.playCount | playCount}}</p>
                <img :src="item.picUrl || item.coverImgUrl" :alt="item.copywriter":title="item.copywriter">
                <span :class="{center:center}">{{item.name}}</span>
                <slot name="img" class="img_user"></slot>
            </li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: "list",
        props:{
            show:{
            	type:Boolean,
                require:false
            },
            list:null,
            show_count:{
            	type:Boolean,
              require: false,
              default:true
            },
            center:{
            	type:Boolean,
                require:false,
                default: false
            }
        },
		mounted() {
			if (this.show){
				this.$refs.day.addEventListener("mouseenter",()=>{
					this.$refs.day.firstElementChild.removeAttribute("class")
				})
				this.$refs.day.addEventListener("mouseleave",()=>{
					this.$refs.day.firstElementChild.setAttribute("class","active")
				})
            }

		},
		filters:{
			playCount(value){
				let number = Math.floor(value/10000)
				return number >0 ? number +"万":value
			}
		},
		methods:{
			btn(id){
				this.$router.push({path:"/songListDetails",query:{id:id}})
			}
		}
	}
</script>

<style scoped lang="scss">
    .list{
        padding: 20px;
        ul{
            list-style: none;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            li{
                position: relative;
                margin-top: 10px;
                width: 100%;
                cursor: pointer;
                overflow: hidden;
                .active{
                    display: none;
                }
                p{
                    position: absolute;
                    right: 5em;
                    top: 10px;
                    color: #000000;
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

                    float: left;
                    &:nth-child(1){
                        position: absolute;
                        top: 0;
                        z-index: 2;
                        border-radius: 10px;
                        transition: all 2s ease-in-out;
                    }
                }
                .center{
                    text-align: center;
                }
                svg{
                    position: relative;
                    left: -2em;
                }
            }
            .day{
                img{
                    filter: blur(10px);
                    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
                }
            }
        }
    }
</style>