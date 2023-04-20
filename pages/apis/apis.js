export const typeone=()=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"/api/detail?goodId=1",
			 success: res => resolve(res),
		})
	})
}
export const supplierList=(one)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"/api/supplierList",
			data:{
				supplier:one
			},
			 success: res => resolve(res),
		})
	})
}
export const getTypeOne=()=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"/api/getTypeOne",
			 success: res => resolve(res),
		})
	})
}
export const getTypeTwo=(one)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"/api/getTypeTwo",
			data:{
				type_one:one
			},
			 success: res => resolve(res),
		})
	})
}
export const getTypeTwoList=(one,two)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"/api/getTypeTwoList?",
			data:{
				type_one:one,
				type_two:two
			},
			 success: res => resolve(res),
		})
	})
}