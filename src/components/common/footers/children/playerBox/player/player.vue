<template>
  <div class="player">
<!--      在vue中直接用duration不能拿到总时长总是返回NAN   通过@canplay就能拿到-->
      <audio  @canplay="getdate" @timeupdate="updateTime" @ended="end" ref="play" src=" https://music.163.com/song/media/outer/url?id=33894312.mp3"></audio>
    <a href="javascript:;"@click="btn">
        <svg v-show="show_state === 'random'" t="1621868590747" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2557" width="24" height="24"><path d="M914.2 705L796.4 596.8c-8.7-8-22.7-1.8-22.7 10V688c-69.5-1.8-134-39.7-169.3-99.8l-45.1-77 47-80.2c34.9-59.6 98.6-97.4 167.4-99.8v60.1c0 11.8 14 17.9 22.7 10l117.8-108.1c5.8-5.4 5.8-14.6 0-19.9L796.4 165c-8.7-8-22.7-1.8-22.7 10v76H758c-4.7 0-9.3 0.8-13.5 2.3-36.5 4.7-72 16.6-104.1 35-42.6 24.4-78.3 59.8-103.1 102.2L513 432l-24.3-41.5c-24.8-42.4-60.5-77.7-103.1-102.2C343 263.9 294.5 251 245.3 251H105c-22.1 0-40 17.9-40 40s17.9 40 40 40h140.3c71.4 0 138.3 38.3 174.4 99.9l47 80.2-45.1 77c-36.2 61.7-103 99.9-174.4 99.9H105c-22.1 0-40 17.9-40 40s17.9 40 40 40l142 0.1h0.2c49.1 0 97.6-12.9 140.2-37.3 42.7-24.4 78.3-59.8 103.2-102.2l22.4-38.3 22.4 38.3c24.8 42.4 60.5 77.8 103.2 102.2 33.1 18.9 69.6 30.9 107.3 35.4 3.8 1.2 7.8 1.8 11.9 1.8l15.9 0.1v55c0 11.8 14 17.9 22.7 10L914.2 725c5.9-5.5 5.9-14.7 0-20z" p-id="2558"></path></svg>
        <svg v-show="show_state === 'list'" t="1621868640048" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2767" width="24" height="24"><path d="M361.5 727.8c-119.1 0-215.9-96.9-215.9-215.9 0-119.1 96.9-215.9 215.9-215.9 2.3 0 4.6-0.2 6.8-0.6v58.3c0 12.3 14 19.4 23.9 12.1l132.6-97.6c8.1-6 8.1-18.2 0-24.2l-132.6-97.6c-9.9-7.3-23.9-0.2-23.9 12.1v58.1c-2.2-0.4-4.5-0.6-6.8-0.6-39.8 0-78.5 7.9-115 23.4-35.2 15-66.8 36.3-94 63.5s-48.6 58.8-63.5 94c-15.5 36.5-23.4 75.2-23.4 115s7.9 78.5 23.4 115c15 35.2 36.3 66.8 63.5 94s58.8 48.6 94 63.5c36.5 15.5 75.2 23.4 115 23.4 22.1 0 40-17.9 40-40s-17.9-40-40-40zM938.2 396.9c-15-35.2-36.3-66.8-63.5-94s-58.8-48.6-94-63.5c-36.5-15.5-75.2-23.4-115-23.4-22.1 0-40 17.9-40 40s17.9 40 40 40c119.1 0 215.9 96.9 215.9 215.9 0 119.1-96.9 215.9-215.9 215.9-4.1 0-8.1 0.6-11.8 1.8v-60.8c0-12.3-14-19.4-23.9-12.1l-132.6 97.6c-8.1 6-8.1 18.2 0 24.2L629.9 876c9.9 7.3 23.9 0.2 23.9-12.1V806c3.7 1.2 7.7 1.8 11.8 1.8 39.8 0 78.5-7.9 115-23.4 35.2-15 66.8-36.3 94-63.5s48.6-58.8 63.5-94c15.5-36.5 23.4-75.2 23.4-115s-7.8-78.5-23.3-115z" p-id="2768"></path></svg>
        <svg v-show="show_state === 'odd'" t="1621868739415" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3370" width="24" height="24"><path d="M361.5 727.8c-119.1 0-215.9-96.9-215.9-215.9 0-119.1 96.9-215.9 215.9-215.9 2.3 0 4.6-0.2 6.8-0.6v58.3c0 12.3 14 19.4 23.9 12.1l132.6-97.6c8.1-6 8.1-18.2 0-24.2l-132.6-97.6c-9.9-7.3-23.9-0.2-23.9 12.1v58.1c-2.2-0.4-4.5-0.6-6.8-0.6-39.8 0-78.5 7.9-115 23.4-35.2 15-66.8 36.3-94 63.5s-48.6 58.8-63.5 94c-15.5 36.5-23.4 75.2-23.4 115s7.9 78.5 23.4 115c15 35.2 36.3 66.8 63.5 94s58.8 48.6 94 63.5c36.5 15.5 75.2 23.4 115 23.4 22.1 0 40-17.9 40-40s-17.9-40-40-40zM938.2 396.9c-15-35.2-36.3-66.8-63.5-94s-58.8-48.6-94-63.5c-36.5-15.5-75.2-23.4-115-23.4-22.1 0-40 17.9-40 40s17.9 40 40 40c119.1 0 215.9 96.9 215.9 215.9 0 119.1-96.9 215.9-215.9 215.9-4.1 0-8.1 0.6-11.8 1.8v-60.8c0-12.3-14-19.4-23.9-12.1l-132.6 97.6c-8.1 6-8.1 18.2 0 24.2L629.9 876c9.9 7.3 23.9 0.2 23.9-12.1V806c3.7 1.2 7.7 1.8 11.8 1.8 39.8 0 78.5-7.9 115-23.4 35.2-15 66.8-36.3 94-63.5s48.6-58.8 63.5-94c15.5-36.5 23.4-75.2 23.4-115s-7.8-78.5-23.3-115z" p-id="3371"></path><path d="M512.8 660.6c22.1-0.1 39.9-18.1 39.8-40.2l-1.2-214.1c-0.1-22-18-39.8-40-39.8h-0.2c-22.1 0.1-39.9 18.1-39.8 40.2l1.2 214.1c0.1 22 18 39.8 40 39.8h0.2z" p-id="3372"></path></svg>
    </a>
    <a href="javascript:;" title="上一首" @click="btn_back"><svg t="162045 3110600" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3099" width="24" height="24"><path d="M206 865h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56z m168.686-386.191l422.304-303.4c32.294-23.201 77.282-15.83 100.484 16.464A72 72 0 0 1 911 233.883v559.053c0 39.764-32.235 72-72 72a72 72 0 0 1-39.95-12.1L376.288 570.877c-25.73-17.16-32.677-51.93-15.517-77.66a56 56 0 0 1 13.915-14.408z" p-id="3100"></path></svg></a>
    <a href="javascript:;" @click="update_play" title="播放">
      <svg v-if="!play" t="1620453233731" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4708" width="30" height="30"><path d="M512 5.12C231.936 5.12 5.12 231.936 5.12 512s226.816 506.88 506.88 506.88 506.88-226.816 506.88-506.88-226.816-506.88-506.88-506.88z m214.528 524.288L445.44 755.2c-14.336 11.776-35.84 1.536-35.84-16.896V285.696c0-18.432 21.504-28.672 35.84-16.896l281.088 226.304c10.752 8.704 10.752 25.088 0 34.304z" p-id="4709"></path></svg>
      <svg v-else t="1620453474627" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7317" width="30" height="30"><path d="M512 64a448 448 0 1 0 0 896 448 448 0 0 0 0-896z m-80 600a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8V360c0-4.416 3.584-8 8-8h48c4.416 0 8 3.584 8 8v304z m224 0a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8V360c0-4.416 3.584-8 8-8h48c4.416 0 8 3.584 8 8v304z" fill-opacity=".65" fill="#2c2c2c" p-id="7318"></path></svg>
    </a>
    <a href="javascript:;" title="下一首" @click="bnt_next"><svg t="1620453309541" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5790" width="24" height="24"><path d="M655.706179 465.602819L332.053897 218.588294c-38.414608-29.327534-93.791393-1.929039-93.791392 46.396277v494.029051c0 48.325316 55.376785 75.725617 93.791392 46.398084l323.652282-247.014525c30.602722-23.357989 30.602722-69.436372 0-92.794362zM781.064814 780.798397V451.684117v-164.562559c0-19.628152 5.904521-60.475733-17.057907-75.841215-25.523642-17.068744-59.747828 1.210165-59.747828 31.919454v493.676839c0 19.628152-5.915358 60.473927 17.047069 75.841215 25.532673 17.068744 59.758666-1.211971 59.758666-31.919454z" fill="#231815" p-id="5791"></path></svg></a>
    <a href="javascript:;">词</a>
  </div>
</template>

<script>
	export default {
		name: "player",
    data(){
			return{
				play:false,
        duration:0,
        show_state: "list",
          currIndex:1
      }
    },
     mounted() {
			this.$bus.$on("volume",val=>{
		        this.$refs.play.volume = val
      })
	 this.$bus.$on("playMusic",(val)=>{
		 this.$refs.play.src = `https://music.163.com/song/media/outer/url?id=${val}.mp3`
         this.update_play()
	   this.play = true
	      this.$refs.play.play()
     })
			},
		methods:{
			update_play(){
				if (this.play === false){
			this.$refs.play.play()
                    this.$bus.$emit("play")
                }else {
			      this.$play.pause()
					  this.$bus.$emit("pause")
                }
				this.play = !this.play
      },
        btn(){
            let list = ["list","odd","random"]
            this.show_state = list[this.currIndex]
            this.currIndex +=1
            if (this.currIndex>2){
            	this.currIndex = 0
            }
            if (this.show_state === "odd"){
            	this.$refs.play.setAttribute("loop","loop")
            }else{
				    this.$refs.play.removeAttribute("loop")
            }
			      this.$store.commit("changeRule",this.show_state)
        },
		getdate(){
		//		不四舍五入   toFixed(2)  四舍五入
     this.$bus.$emit("duration",this.$play.duration())
		// console.log(this.$refs.play.volume)

        ,this.$refs.play.volume = 0.5
    },
		updateTime(){
		let timer =  0+String((this.$refs.play.currentTime/60).toFixed(2)).split(".").join(":")
     this.$bus.$emit("time",timer)
     this.$bus.$emit("progress",{currentTime:this.$refs.play.currentTime,duration:this.$refs.play.duration})
    },
        end(){
				if (this.$store.getters.list_data.length<0){
			      this.$refs.play.pause()
            this.play = false
            return false
        }
			      this.$play.pause()
            this.$store.commit("next")
				    this.$bus.$emit("playMusic",this.$store.getters.list_data)
        },
		bnt_next(){
		if (this.$store.state.song_list <= 0) return false
		this.$store.commit("next")
		this.$bus.$emit("playMusic",this.$store.getters.list_data)
    },
		btn_back(){
		  if (this.$store.state.song_list <= 0) return false
			this.$store.commit("back")
			this.$bus.$emit("playMusic",this.$store.getters.list_data)
		}
    }
	}
</script>

<style scoped lang="scss">
.player{
  flex: 1;
  text-align: center;
  box-sizing: border-box;
  a{
    margin: 10px;
    padding: 10px;
    color: #cccccc;
  }
}
</style>