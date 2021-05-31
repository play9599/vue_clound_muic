import {get_data} from "./index"
//推荐歌单的数据
export function personalized(limit=7) {
	return get_data({
		url:`/personalized?limit=${limit}`
	})
}
//独家放送(入口)的数据
export function only() {
	return get_data({
		url:"/personalized/privatecontent?limit=3"
	})
}
//推荐新音乐数据
export function newSongList() {
	return get_data({
		url:"/personalized/newsong?limit=12"
	})
}
//mv数据
export function MV() {
	return get_data({
		url:"/personalized/mv"
	})
}