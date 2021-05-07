<template>
  <div class="song_data">
    <div class="ps" ref="ps">
      <img src="@/assets/image/logo.png" title="展开音乐详情页" ref="img"/>
    </div>
    <div class="songer">
      <p>
        <a href="/">简单爱</a>
        <span>未知</span>

      </p>
      <div class="love" @click="btn_show">
        <svg v-if="show"  t="1620373256612" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1426" width="24" height="24"><path d="M364.2 174.3c38.3 0 76 10 109 28.8 12.3 7 26 10.6 39.7 10.6 13.5 0 27-3.4 39.2-10.3 32.7-18.4 70-28.1 107.8-28.1 58.8 0 114 22.9 155.5 64.4 40.7 40.7 63.5 94.7 64.4 152.2 0.9 57.4-20.2 112-59.4 153.7-1 1.1-2.1 2.3-3 3.4-0.4 0.5-0.6 0.7-0.7 0.7l-297 297c-1.9 1.9-4.3 2.9-7.1 2.9-2.7 0-5.1-1-7.1-2.9L209.3 550.5l-0.7-0.7-0.3-0.3c-41.3-41.5-64.1-96.6-64.1-155.2 0-58.8 22.9-114 64.4-155.6s96.8-64.4 155.6-64.4m0-80c-165.7 0-300 134.3-300 300 0 82.6 33.4 157.4 87.4 211.7 0.1 0.2 0.3 0.3 0.4 0.5l297 297c17.6 17.6 40.6 26.4 63.6 26.4s46.1-8.8 63.6-26.4l297-297c1.9-1.9 3.8-4 5.5-6C989.1 482.8 986.8 298 872 183.1c-58.6-58.6-135.3-87.9-212.1-87.9-50.8 0-101.5 12.8-147 38.4-43.9-25-94.6-39.3-148.7-39.3z" fill="#e6e6e6" p-id="1427"></path></svg>
        <svg v-else t="1620373458346" class="icon" viewBox="0 0 1151 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1749" width="24" height="24"><path d="M1138.797862 345.839475c-6.397741 147.148038-70.375149 249.511891-191.932224 371.068967-25.590963 19.193222-44.784186 44.784186-83.17063 70.375148-12.795482 12.795482-70.375149 57.579667-89.568371 76.77289-12.795482 12.795482-38.386445 31.988704-63.977408 51.181926-6.397741 0-6.397741 0-6.397741 6.397741-19.193222 12.795482-38.386445 31.988704-63.977408 44.784186-12.795482 6.397741-25.590963 19.193222-25.590963 19.193222l-25.590964 19.193223-31.988704-19.193223c-6.397741-6.397741-19.193222-12.795482-31.988704-19.193222-25.590963-12.795482-44.784186-31.988704-70.375148-44.784186-6.397741-6.397741-12.795482-6.397741-12.795482-12.795481-25.590963-19.193222-51.181926-38.386445-70.375149-51.181927-19.193222-12.795482-70.375149-63.977408-76.772889-63.977408-31.988704-25.590963-51.181926-44.784186-76.77289-63.977408C76.77289 601.749107 12.795482 492.987514 6.397741 339.441735c-12.795482-319.88704 345.478003-454.239597 563.00119-223.920928 223.920928-230.318669 582.194413-95.966112 569.398931 230.318668z" fill="#d81e06" p-id="1750"></path></svg>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "songData",
      data(){
			return{
				show:true
      }
      },
    mounted() {
			this.$nextTick(()=>{
		    this.$refs.img.addEventListener("mouseenter",()=>{
			      let odiv = document.createElement("div")
            odiv.innerText = "▲"
            odiv.setAttribute("class","odiv")
            odiv.style.cssText = `
              z-index:2;
              width:100%;
              height:100%;
              margin:auto;
            `
			  this.$refs.img.appendChild(odiv)
        },false)
		  this.$refs.img.addEventListener("mouseleave",()=>{
			  document.getElementsByClassName("odiv")[0].remove()
		  },false)
      })
	},
      methods:{
		  btn_show(){
		  	this.show  = ! this.show
      }
      }
  }
</script>

<style scoped lang="scss">
.song_data{
  flex: 1.5;
  /*background-color: #ffa772;*/
  display: flex;
  .ps{
    width: 50px;
    height: 50px;
    margin:  auto 10px;
    background-color: slategrey;
    border-radius: 10px;
    overflow: hidden;
    &:hover{
      background-color: rgba(56, 69, 77, 0.55);
    }
    img{
      width: 100%;
      height: 100%;
      display: flex;
      text-align: center;
    }
  }
  .songer{
    position: relative;
    p{
      margin: 10px;
      display: inline-block;
      a{
        color: #000000;
      }
      span{
        display: block;
      }
    }
    .love{
      display: inline-block;
    }
  }
}
</style>