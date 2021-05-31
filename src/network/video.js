import {users_data} from "./index";
//获取推荐mv的数据(因为视频接口号不行)
export  function recommend(type="") {
	return users_data({
		url:`mv/all?limit=32&area=${type}`
	})
}
export function getMovieDate(id) {
	return users_data({
		url:`/mv/detail?mvid=${id}`
	})
}
//mv的评论的数据
export function getMovieComment(id) {
	return users_data({
		url:`/comment/mv?id=${id}&limit=40`
	})
}
//mv的相似推荐
// /simi/mv?mvid=5436712
export function aboutMovie(id) {
	return users_data({
		url:`/simi/mv?mvid=${id}`
	})
}
//mv的播放地址
export function movieUrl(id) {
	return users_data({
		url:`/mv/url?id=${id}`
	})
}
//歌手详情
//=11972054
export function songerDetail(id) {
	return users_data({
		url:`/artist/detail?id=${id}`
	})
}