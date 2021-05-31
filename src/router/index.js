import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
const foundMusic = ()=>import("../views/foundMusic/foundMusic")
const recommend = ()=>import("../views/foundMusic/children/recommend/recommend")
const playList = ()=>import("../views/foundMusic/children/playList/playList")
const rankingList =  ()=>import("../views/foundMusic/children/rankingList/rankingList")
const friend = ()=>import("../views/friend/friend")

const videos = ()=>import("../views/videos/videos")
const clip = ()=>import("../views/videos/clip/clip")

const detailFm = ()=>import("../views/detailFm/detailFm")

const download = ()=>import("../views/download/download")

const music = ()=>import("../views/music/music")

const myLove = ()=>import("../views/myLove/myLove")
//公共组件
const songDetail = ()=>import("../components/content/songListDetails/songListDetails")
const  userDate  = ()=>import("../components/content/userDate/userDate")
const  movie = ()=>import("../components/content/movie/movie")
const routes = [
	{
		path:"/",
		redirect:"/foundMusic/recommend",
	},
	{
		path:"/foundMusic",
		redirect:"/foundMusic/recommend"
	},
	//发现音乐
	{
		path: "/foundMusic",
		component:foundMusic,
		children:[
			{
				path:"recommend",
				component:recommend
			},
			{
				path:"playList",
				component:playList
			},
			{
				path:"radioStation",
				component:recommend
			},
			{
				path:"charts",
				component:rankingList
			},
			{
				path:"songer",
				component:recommend
			},
			{
				path:"music",
				component:recommend
			}
		]
	},
	//朋友
	{
		path: "/friend",
		component:friend
	},
	//视频
	{
		path: "/videos",
		component:videos,
		redirect:"/videos/video",
		children:[
			{
				path:"video",
				component:clip
			},
			{
				path:"Mv",
				component:recommend
			}
		]
	},
	//私人FM
	{
		path: "/detailFm",
		component:detailFm
	},
	//本地下载
	{
		path: "/download",
		component:download
	},

	{
		path: "/music",
		component:music
	},
	{
		path: "/myLove",
		component:myLove
	},
	{
		path:"/songListDetails",
		component:songDetail
	},
	{
		path:"/userDate",
		component:userDate
	},
	{
		path:"/movie",
		component:movie
	}
]
const router = new VueRouter({
	routes,
	mode:"history"
})
export default router