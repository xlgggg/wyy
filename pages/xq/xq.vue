<template>
	<view>
		<div data-v-1df0ab4b="" class="section-firstCate">
			<div data-v-3b297d3e="" data-v-1df0ab4b="" class="byui-scroll-wrapper">
				<div data-v-3b297d3e="" class="byui-scroll-content">
					<ul data-v-1df0ab4b="" data-v-3b297d3e="">
						<template v-for="(item,index) in typeone" :key="item">
							<li data-v-1df0ab4b="" data-v-3b297d3e="" :class="index==num ? 'active firstCateActive' : 'firstCateActive' " @click="nummax(index)">
								<span>{{item}}</span>
							</li>
						</template>
					</ul>
				</div>
			</div>
		</div>
		<div data-v-1df0ab4b class="section-cateList">
			<div data-v-3b297d3e data-v-1df0ab4b class="byui-scroll-wrapper">
				
		<div  class="byui-scroll-content" style="transition-duration: 0ms; transform: translate(0px, 0px) scale(1) translateZ(0px);">
			<ul  style="pointer-events: auto;">
				<li  class="cateList-first show" >
					<div >
						<div  class="first-cateList-item flex">
							<div  class="first-cateList-name-before"></div>
							<div class="escp first-cateList-name">
								{{typeone[num]}}
							</div>
							<div  class="first-cateList-name-after"></div>
						</div>
						<ul >
							<li  class="cateList-second" v-for="(item,index) in typetwo" :key="item">
								<div  class="list-hd-wrap aLinkJump">
									<div  class="list-hd flex">
										<div  class="list-hd-name escp">
											{{item}}
										</div>
										<div  class="list-hd-more"><span>更多</span> 
										<i class="iconfont byicon-arrow-light-right"></i>
										</div>
									</div>
								</div>
								<ul  class="clear">
									<template v-for="itemone in typelist"  :key="itemone">
										
									<li  class="cateList-third aLinkJump" v-for="itemtwo in itemone" v-show="itemtwo.type_two==item" :key="itemtwo" >
										<a >
											<dl >
												<dt >
													<img 
														class="lazy"
														:src="itemtwo.imageUrl"
														></dt>
												<dd data-v-1df0ab4b="" data-v-3b297d3e="" class="escp-double">
													{{itemtwo.title}}
												</dd>
											</dl>
										</a>
										</li>
									</template>
								</ul>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
		</div>
		</div>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	import {
		getTypeOne,
		getTypeTwo,
		getTypeTwoList
	} from '../apis/apis.js'
	let num = ref(0)
	let typeone = ref([])
	let typetwo = ref([])
	let typelist=ref([])
	const shujj=()=>{
		let listnum=[]
		let quan=[]
		getTypeTwo(typeone.value[num.value]).then(res => {
			console.log(res.data);
			typetwo.value=res.data
				listnum=typetwo.value
			listnum.forEach(item=>{
				getTypeTwoList(typeone.value[num.value],item).then(res=>{
					quan.push(res.data)
					typelist.value=quan
					for (var i = 0; i < typelist.value.length; i++) {
						typelist.value[i].length>5?typelist.value[i].length=5:''
					}
					// console.log(typelist.value);
				})
			})
		})
	}
	getTypeOne().then(res => {
		typeone.value = res.data
		shujj()
	})
	const nummax=(index)=>{
		num.value=index
		shujj()
	}
</script>

<style scoped >
.section-firstCate {
    position: fixed;
    left: 0;
    top: 80rpx;
    bottom: 0.99rem;
    z-index: 2;
    box-sizing: border-box;
    width: 150rpx;
    overflow: hidden;
    background: #f7f7f7;
}
.byui-scroll-wrapper{
	width: 100%;
	height: 100%;
}
.byui-scroll-content {
	width: 100%;
	height: 100%;
    display: inline-block;
    overflow: hidden;
    z-index: 1;
}
.byui-scroll-content ul{
	width: 100%;
	height: 100%;
}
.section-firstCate li[data-v-1df0ab4b] {
	text-align: center;
    width: 100%;
    height: 100rpx;
    font-size: 16px;
    color: #4a4a4a;
    text-align: center;
    box-sizing: border-box;
    padding: 12rpx 0;
}
.section-cateList[data-v-1df0ab4b] {
    position: absolute;
	right: 0;
    z-index: 2;
    box-sizing: border-box;
    width: 600rpx;
    left: 150rpx;
    padding-bottom: 0.01rem;
}
.first-cateList-item {
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #4a4a4a;
    height: 100rpx;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    position: relative;
	line-height: 100rpx;
}
.first-cateList-name-after {
    height: 2rpx;
    width: 20rpx;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAACCAYAAAAesF8hAAAAAXNSR0IArs4c6QAAAJhJREFUGBldT0sKRCEM8/P6wIX3v4N3mGOpC1EnKVORKUjTNInqSymx1iprLem9v957SSnJGON1zgnPnFOxoIj33g90bwjhaKhDhs7gBZqzM2y8+eE5Gvr/deRunm+j5/J/HhCncs4Oj3CtNQfxjjHqDn3j8oPxCc8B2sNzNg0zUBsZ7Jp1Y1K6gObXtd1+3m+7G4NjrvnXF/XOUa7X8vi3AAAAAElFTkSuQmCC) no-repeat center top;
    background-size: 100% 100%;
}
.first-cateList-name {
    max-width: 50rpx;
    position: relative;
	left: 250rpx;
    margin: 0 16rpx;
}
.list-hd {
	position: relative;
	height: 100rpx;
	line-height: 100rpx;
}
.list-hd-name {
	position: absolute;
	left: 20rpx;
}
.list-hd-more{
	position: absolute;
	right: 20rpx;
}
.cateList-third{
	float: left;
	    width: 150rpx;
	    height: 200rpx;
	    margin: 32rpx 30rpx 32rpx 0;
}
.cateList-third a {
    display: block;
}
.cateList-third img {
    width: 120rpx;
    height: 120rpx;
    border-radius: 0.03rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUxpcczMzMzMzMzMzMzMzMzMzMzMzFddWqAAAAAGdFJOUwDwJ45Vt2IVef8AAADYSURBVGje7da7DoJAFIThE0ysvSTURF+AyhpjYr021iKX938EOaASoNqZwsL5Gir+sLtHwUxERERERCTOKm0nyjwycG9nmshAOg+UkYF2AQhUhyMXKMyuTKDyw2ACdXdJmMBz3Mz9JaWeoMy6zYgPNN892JmtmVPoHgALVNkwB74WKPBRkAGfByqQ44Ht+DvGNjHxf4WAB4KPgZ8hGPBbzz5EaKAf5VuGB/rFJwYH3ovHA7WRgUAGpisAAtMVAIENG3j8OkC/G0/s23nxfRD0zSQiIiIi8m9ejQWMrHL/8ygAAAAASUVORK5CYII=) no-repeat center;
}
.cateList-third dd {
	height: 40rpx;
    margin-top: 24rpx;
    color: #666;
    font-size: 12px;
    word-break: break-all;
    line-height: 40rpx;
}
.cateList-second>ul {
	margin-left: 30rpx;
    padding-left: 20rpx;
    overflow: hidden;
}
.active{
	    background: #fff;
		color: #7f4395;
}
</style>