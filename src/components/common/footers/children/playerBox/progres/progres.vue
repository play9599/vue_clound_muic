<template>
  <div class="progres">
    <div class="progres_content">
      <span>{{updateTime}}</span>
      <div class="progress">
        <div class="children" ref="children"></div>
      </div>
      <span>{{duration}}</span>
    </div>
  </div>
</template>

<script>
	export default {
		name: "progres",
        data(){
			return{
				i:0,
          duration:"",
          updateTime:"00:00"
            }
        },
    //  滾動條的邏輯還是有點問題·
    mounted() {
			let timer=null;
			let timeOut = 1000
	      this.$bus.$on("play",()=>{
            this.$play.play()
          })
		   this.$bus.$on("pause",()=>{
		   	  this.$play.pause()
		   })

        this.$bus.$on("duration",val=>{
			let number =  Math.round(val)
			let first = Math.floor(number/60)
			let  last = number - (first *60)
			let result = last<10?"0"+first+":0"+last:"0"+first+":"+last
        	this.duration = result
        })
        // this.$bus.$on("time",val=>{
        // 	this.updateTime = val
        // })
        this.$bus.$on("progress",val=>{
			      let number =  Math.round(val.currentTime)
			let first = Math.floor(number/60)
            let  last = number - (first *60)
            let result = last<10?"0"+first+":0"+last:"0"+first+":"+last
			this.updateTime = result
        	  let bai = val.currentTime / val.duration * 100
			this.$refs.children.setAttribute("style",`width:${bai}%;`)
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
          width: 0%;
        border-radius: 10px;
        position: relative;
        background-color: #ffa772;
      }
    }
  }
}
</style>