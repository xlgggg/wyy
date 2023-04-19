export const typeone=()=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"/api/detail?goodId=1",
			 success: res => resolve(res),
		})
	})
}