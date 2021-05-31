import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store";
// import vuescroll from "vue-scroll";
// import 'vuescroll/dist/vuescroll.css';
import './plugins/element.js'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
	router,
	store,
  	render: h => h(App)
}).$mount('#app')
class player {
	constructor(audio,src) {
		this.audio = audio
		this.audio.src = src
	}
	play(){
		this.audio.play()
	}
	pause(){
		this.audio.pause()
	}
	duration(){
		return this.audio.duration
	}
}
let play = new player(document.getElementsByTagName("audio")[0],"https://music.163.com/song/media/outer/url?id=33894312.mp3")
Vue.prototype.$play = play
