import {users_data} from "./index";
// type=1&area=96&initial=b
//获取歌手的数据
export  function getSongDate(type=-1,area=-1,initial=-1) {
	return users_data({
		url:`/artist/list?type=${type}&area=${area}&initial=${initial}`
	})
}
// 获取最新音乐的数据
export function getNewMusic() {
	return users_data({
		url:"/personalized/newsong?limit=100"
	})
}