<template>
  <div class="left_right">
    <span class="direction" @click="btn"><</span>
    <span class="direction" @click="btn">></span>
    <div class="search">
      <input type="text" placeholder="搜索">
    </div>
    <a href="/index" title="听歌识曲"></a>
  </div>
</template>

<script>
	export default {
		name: "leftRight",
    methods:{
			btn(){
		  console.log("hello world")
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
    input{
      margin-left: 30px;
      border: none;
      outline: none;
    }
  }
  a{
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #606dff;
    margin-left: 20px;
  }
}
</style>