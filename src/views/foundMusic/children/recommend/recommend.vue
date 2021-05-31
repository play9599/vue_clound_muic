<template>
    <div class="recommend">
        <swiper></swiper>
        <song-list></song-list>
        <only-one></only-one>
        <new-song></new-song>
        <MV></MV>
    </div>
</template>

<script>
    import swiper from "@/components/common/swiper/swiper";
    import songList from "./songList/songList";
    import onlyOne from "./onlyOne/onlyOne";
    import newSong from "./newSong/newSong";
    import MV from "./MV/MV";
	export default {
		name: "recommend",
        components:{
			swiper,
            songList,
            onlyOne,
            newSong,
            MV
        },
        data(){
			return {

            }
        }
	}
</script>

<style scoped lang="scss">
.recommend{
    box-sizing: border-box;
    padding: 20px;
}
</style>