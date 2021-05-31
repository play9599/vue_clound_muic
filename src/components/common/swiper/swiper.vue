<template>
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(item,index) in url_list" :key="index">
            <img :src="item.imageUrl" alt="">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    import {banner} from "@/network/banner";
	export default {
		name: "swiper",
        data(){
			return{
				url_list:null
            }
        },
        mounted() {
			banner().then(res=>{
				this.url_list = res.banners.splice(0,7)
            })
		}
	}
</script>

<style scoped lang="scss">
    .el-carousel__item{
        img{
            width: 100%;
            height: 100%;
            background-size: cover;
            border-radius: 2em;
        }
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>