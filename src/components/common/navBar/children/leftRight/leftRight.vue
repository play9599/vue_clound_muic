<template>
  <div class="left_right">
    <span class="direction" @click="btn('back')"><</span>
    <span class="direction" @click="btn('goto')">></span>
    <div class="search">
      <svg t="1620352169877" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2124" width="20" height="20"><path d="M972.8 870.4l-263.68-263.68a358.4 358.4 0 1 0-102.4 102.4L870.4 972.8zM179.2 409.6A230.4 230.4 0 1 1 409.6 640 230.4 230.4 0 0 1 179.2 409.6z" p-id="2125"></path></svg>
      <input type="text" placeholder="搜索">
    </div>
    <a href="/index" title="听歌识曲">
      <svg t="1620351860185" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1273" width="20" height="20"><path d="M512 640c115.2 0 208-92.8 208-208V272c0-115.2-92.8-208-208-208s-208 92.8-208 208v160c0 115.2 92.8 208 208 208zM368 272c0-80 64-144 144-144s144 64 144 144v160c0 80-64 144-144 144s-144-64-144-144V272z" p-id="1274"></path><path d="M844.8 480c0-17.6-14.4-32-32-32-16 0-30.4 12.8-32 28.8C758.4 606.4 646.4 704 512 704s-246.4-97.6-268.8-227.2c-1.6-16-16-28.8-32-28.8-17.6 0-32 14.4-32 32v4.8C204.8 635.2 328 752 480 766.4V928c0 17.6 14.4 32 32 32s32-14.4 32-32V766.4c152-14.4 275.2-131.2 299.2-280 0-1.6 1.6-4.8 1.6-6.4z" p-id="1275"></path></svg>
    </a>
  </div>
</template>

<script>
	export default {
		name: "leftRight",
    methods:{
			btn(val){
		    if (val === "back"){
		    	this.$router.go(-1)
        }else {
			    this.$router.go(1)
        }
      }
    }
	}
</script>

<style scoped lang = "scss">
.left_right{
  flex: 2;
  color: #ffffff;
  .direction{
    width: 24px;
    margin-left: 20px;
    height: 24px;
    border-radius: 30%;
    padding: 6px;
    text-align: center;
    background-color: silver;
  }
  .search{
    display: inline-block;
    margin-left: 20px;
    background-color: white;
    border-radius: 10px;
    svg{
      position: relative;
      top: 4px;
    }
    input{
      margin-left: 10px;
      border: none;
      outline: none;
    }
  }
  a{
    display: inline-block;
    width: 12px;
    height: 12px;
    /*background-color: #606dff;*/
    margin-left: 20px;
    border-radius: 50%;
    /*overflow: hidden;*/
  }
}
</style>