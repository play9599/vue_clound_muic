import Vuex from "vuex"
import Vue from "vue";
import {details} from "@/network/song_detail";
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		nav_list:[
			{name:"个性推荐",path:"/foundMusic/recommend"},
			{name:"歌单",path:"/foundMusic/playList"},
			{name:"主播单台",path:"/foundMusic/radioStation"},
			{name:"排行榜",path:"/foundMusic/charts"},
			{name:"歌手",path:"/foundMusic/songer"},
			{name:"最新音乐",path:"/foundMusic/music"},
		],
		song_list:[],
		show:false,
		song_Index:0,
		currIndex_state:0,
		list_rule:"list"
	},
	getters:{
		getting_nav_list(state){
			return state.nav_list
		},
		getting_list(state){
			return state.song_list
		},
		show(state){
			return state.show
		},
		list_data(state){
			if (state.song_Index >  state.song_list.length) return false
			return state.song_list[state.song_Index].id
		},
	},
	//同步更改
	mutations:{
		update_nav_list(state,value){
			state.nav_list = value
		},
		add(state,value){
			state.song_list.splice(0,state.song_list.length)
			state.song_list.push(...value)
		},
		change_show(state){
			state.show = ! state.show
		},
		next(state){
			if (state.list_rule === "list"){
				state.song_Index +=1
			}
			if (state.list_rule === "random"){
				state.song_Index = Math.round(Math.random()*state.song_list.length)
			}
		},
		back(state){
			state.song_Index -=1
		},
		change_index(state,index){
			if (index  < state.song_list.length){
				state.song_Index = index
			}else {
				state.song_Index = 0
			}
		},
		changeRule(state,val){
			state.list_rule = val
		}
	},
	//异步更改
	actions:{

	}
})
export default store