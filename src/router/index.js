import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
const foundMusic = ()=>import("../views/foundMusic/foundMusic")
const friend = ()=>import("../views/friend/friend")
const videos = ()=>import("../views/videos/videos")
const detailFm = ()=>import("../views/detailFm/detailFm")
const download = ()=>import("../views/download/download")
const music = ()=>import("../views/music/music")
const myLove = ()=>import("../views/myLove/myLove")
const routes = [
	{
		path:"/",
		redirect:"/foundMusic",
	},
	{
		path: "/foundMusic",
		component:foundMusic
	},
	{
		path: "/friend",
		component:friend
	},
	{
		path: "/videos",
		component:videos
	},
	{
		path: "/detailFm",
		component:detailFm
	},
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
]
const router = new VueRouter({
	routes,
	mode:"history"
})
export default router