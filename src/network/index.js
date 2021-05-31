import axios from "axios"
export function users_data(config) {
	const instance = new axios.create({
		url:config.url+`&=${Date.now()}`,
		baseURL: "http://localhost:3000/",
		timeout: 5000,
		method: config.method || "get",
		withCredentials: true,
		headers:{"Content-Type":"application/x-www-form-urlencoded;;charset=utf-8"}
	});

	// 请求拦截器
	instance.interceptors.request.use(config => {

		let token = localStorage.getItem('token');
		if (token) {
			// 设置请求头中token的参数
			config.headers.common['token'] = localStorage.getItem('token');
			console.log(token)
		}
		//拦截后需要将拦截下来的请求数据返回发送
		return config;

	}, err => {

	})

	// 响应拦截器
	instance.interceptors.response.use(res => {
		// 拦截后需要将拦截下来处理成的结果返回
		return res.data
	}, err => {
		return Promise.reject(err)
	})

	return instance(config)
}
export function get_data(config) {
	const instance = new axios.create({
		url:config.url+`&=${Date.now()}`,
		baseURL: "http://localhost:3000/",
		timeout: 5000,
		method: config.method || "get",
		withCredentials:true,
		headers:{"Content-Type":"application/x-www-form-urlencoded;;charset=utf-8"}
	});

	// 请求拦截器
	instance.interceptors.request.use(config => {
		//由于axios开启了withCredentials:true 所以再用这个会报错
		// let token = localStorage.getItem('token');
		// if (token) {
		// 	// 设置请求头中token的参数
		// 	config.headers.common['cookies'] = localStorage.getItem('token');
		// 	console.log(stoken)
		// }
		//拦截后需要将拦截下来的请求数据返回发送
		return config;

	}, err => {

	})

	// 响应拦截器
	instance.interceptors.response.use(res => {
		// 拦截后需要将拦截下来处理成的结果返回
		return res.data
	}, err => {
		return Promise.reject(err)
	})

	return instance(config)
}