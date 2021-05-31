import {users_data} from "./index"
//歌曲详情
export function detail(ids=33894312){
	return users_data({
		url:`/song/detail?ids=${ids}`
	})
}
export function details(ids){
	return users_data({
		url:`/song/detail?ids=${ids}`
	})
}
//歌单详情
export  function songListDetail(id) {
	return users_data({
		url:`/playlist/detail?id=${id}`
	})
}
//热门歌单
export  function hotSong(limit=20,cat="华语") {
	return users_data({
		url:`/top/playlist?limit=${limit}&cat=${cat}`
	})
}
export function song_detail(ids){
	let list = ids.forEach(item=> item.id).join(",")
	return users_data({
		url:`/song/detail?ids=${list}`
	})
}
export  function song() {
 return users_data({
	 url:`http://localhost:3000/recommend/songs`
 })
}