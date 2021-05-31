<template>
    <div>
        <list-grid
                :list="list"
                txt_name="video"
                name="最新视频"
                @cat="findMusic"
        ></list-grid>
        <videos-list :list="datas"></videos-list>
    </div>
</template>

<script>
    import {recommend} from "@/network/video"
    import listGrid from "@/components/content/listGrid/listGrid";
    import videosList from "@/components/common/videosList/videosList";
	export default {
		name: "clip",
      components:{
			  listGrid,
          videosList
      },
      data(){
			  return{
			  	list:["内地","港台","欧美","日本","韩国"],
            datas :null
        }
      },
      created() {
			  recommend().then(res=>{
			  	let {data} = res
			console.log(res)
			  this.datas = data
        })
		},
      methods:{
		  findMusic(value){
		  console.log(value)
      }
      }
  }
</script>

<style scoped>

</style>