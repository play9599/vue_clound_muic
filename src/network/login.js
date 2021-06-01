import {users_data} from "./index"
//
export  function qrkey() {
	// console.log("发送网络请求")
	return users_data({
		url:`/login/qr/key?time=${Date.now()}`
	})
}
export  function create(key) {
	// console.log("发送网络请求")
	return users_data({
		url:`/login/qr/create?key=${key}&qrimg=true&time=${Date.now()}`,
	})
}
export  function getLoginCode(key) {
	// console.log("发送网络请求")
	return users_data({
		url:`/login/qr/check?key=${key}&time=${Date.now()}`,
	})
}
//查看登陆状态
export function getDate() {
 return users_data({
	 url:`/login/status?time=${Date.now()}`
 })
}
//用手机登录
export function phone(phone,password) {
	return users_data({
		url:`/login/cellphone?phone=${phone}&password=${password}`
	})
}