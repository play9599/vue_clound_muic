<template>
  <div class="progres">
    <div class="progres_content">
      <span>0:00</span>
      <div class="progress">
        <div class="children" ref="children"></div>
      </div>
      <span>5:20</span>
    </div>
  </div>
</template>

<script>
	export default {
		name: "progres",
    mounted() {
			//定时器原理
			this.$nextTick(()=>{
				let i = 0
		    let timer = setInterval(()=>{
		    	 this.$refs.children.setAttribute("width",`${i++}%`)
            if (i=100){
            	clearInterval(timer)
            }
        })
      })
	}
  }
</script>

<style scoped lang="scss">
.progres{
  flex: 1;
  overflow: hidden;
  display: flex;
  .progres_content{
    margin: auto;
    display: flex;
    span{
      margin: 10px;
    }
    .progress{
      width: 30vw;
      height: 10px;
      border-radius: 10px;
      position: relative;
      top: 15px;
      background-color: #cccccc;
      .children{
        height: 100%;
        border-radius: 10px;
        position: relative;
        background-color: #ffa772;
      }
    }
  }
}
</style>