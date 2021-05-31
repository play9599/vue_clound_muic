import {users_data} from "./index"
//用户的歌单
export  function my_songList_Date(id = 322406014) {
	return users_data({
		url:`/user/playlist?uid=${id}`
	})
}
//用户的基本信息
export function user_data(id=322406014) {
	return users_data({
		url:`/user/detail?uid=${id}`
	})
}