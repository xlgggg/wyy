<template>
	<view>
		<scroll-view scroll-y="true"  @scroll="gund">
			<ul class="tabs" style="opacity: 1; transform: scaleY(1);" v-show="sctop">
					<li class="commodity active" @click="sangp">
						<div class="sprites-icon dingwei tabs1"></div>
						商品
					</li>
					<li class="evaluate" @click="pjj">
						<div class="sprites-icon dingwei"></div>
						评价
					</li>
					<li class="details"  @click=xinq>
						<div class="sprites-icon dingwei"></div>
						详情
					</li>
				</ul>
		<div class="header-down" id="headerConent"
			style="background-image: url(&quot;https://bfs.biyao.com/group1/M00/B4/3B/rBACW1yjqW6Ae7RhAAAd5r4TJxY228.jpg&quot;);" v-show="!sctop">
			<div class="header-price" id="headerPrice">50元</div>
			<div class="header-right">
				<p class="top-p" id="topText">大牌品质 工厂价格</p>
				<p class="bottom-p" id="bottomText">下载app领取新用户限量专属特权</p>
			</div>
		</div>
		<swiper indicator-dots class="rqi" autoplay interval="2000" circular>
			<swiper-item v-for="(item,index) in imgs" :key="index">
				<img :src="item.substr(1, 80)" alt="" />
			</swiper-item>
		</swiper>
		<view class="gl-base-detial-wrap">
			<view class="price-collec-info">
				<view class="price base-price">￥<span>{{shuj.priceStr}}</span>
					<view>
						<view class="al-pay-hb">
							<span class="sprites-icon"></span> 支持花呗分期付款
						</view>
						<view id="collectSign" class="collect">
							<i class="sprites-icon"></i>
							<p class="collectText">收藏</p>
						</view>
					</view>
					<view class="makers-info">
						<view class="markers-text">
							<view class="sprites-icon img"></view>{{shuj.supplier}}
						</view>
						<view class="generate-time">生产周期: <span class="duration-days">7</span>天 <span
								class="iconfont"></span></view>
					</view>
					<h1 class="product-h1-title">{{shuj.title}}</h1>
					<h3 class="product-h3-desc">{{shuj.salePoint}}</h3>
				</view>
			</view>
		</view>
		<view class="gl-service-content gl-service-wrap">
			<ul class="gl-service-list">
				<li>
					<span>7天无忧退货</span>
				</li>
				<li>
					<span>先行赔付</span>
				</li>

				<li>
					<span>超时赔偿</span>
				</li>

				<li>
					<span>顺丰包邮</span>
				</li>
			</ul>
		</view>
		<view class="gl-rule-wrap">
			<view>
				<view class="gl-rule-title">
					<view class="gl-rule-title-l">拼团玩法</view>
					<view class="gl-rule-title-r">
						<b>详细规则</b>
						<span class="gl-more iconfont"></span>
					</view>
				</view>
			</view>
			<img src="https://static.biyao.com/mnew/img/master/togetherGroup/rule@2x_4b87758.png" class="gl-rule-img" />
		</view>
		<view class="gl-comment-box aLinkJump">
			<view class="gl-comment-header">
				<view class="gl-comment-numbers" ref="pj" >商品评价 (30470)</view>
				<view class="gl-comment-grades">
					<span>好评率98.3% ></span>
				</view>
			</view>
			<view class="gl-comment-box-warp">
				<view class="gl-comment-box-content">
					<view class="don">
						<view class="head-left flex">
							<img :src="pingj.userPic" alt="" />
							<span>{{pingj.userName}}</span>
						</view>
						<view class="head-right flex">
							<img src="https://static.biyao.com/mnew/img/master/comment/icon_evaluate_satisfied_48@2x_6b80b83.png"
								alt="">
							<span>满意</span>
						</view>
					</view>
					<view class="gl-comment-time escp-double">{{pingj.time}}{{pingj.product}}</view>
					<view class="gl-comment-detail escp-double">{{pingj.text}}</view>
				</view>
			</view>
		</view>
		<view class="gl-supplier-wrap">
			<div class="supplier-info-wrap aLinkJump">
				<div class="supplier-info-left">
					<img :src="shuj.addressLogo" />
				</div>
				<div class="supplier-info-center">
					<h2>{{shuj.addressName}}</h2>

					<p>商品质量:4.9&nbsp;&nbsp;&nbsp;&nbsp; 服务态度: 5.0</p>

				</div>
				<div class="supplier-info-right">
					<span>全部商品 {{tongl.length}} ></span>
				</div>
			</div>
			<div class="sipplier-img-wrap">
				<ul class="commend-list">
					<swiper  class="xisi"   >
						<swiper-item>
							<template v-for="(item,index) in tongl">
								<li class="aLinkJump" v-show="index<7"> <a class="commend-list-a">
										<div class="recommend-pic">
											<img :src="item.imageUrl">
										</div>
										<p class="recommend-tit inaline commend-list-tit ">{{item.title}}</p>
										<p class="item-labels">
											<span style="background:;color:#FB4C81;border-color:#FB4C81">一起拼</span>
										</p>
										<p class="item-price"><i>￥</i><span class="item-only-int">{{item.priceStr}}</span></p>
									</a>
								</li>
							</template>
						</swiper-item>
				</swiper>
				</ul>
			</div>
			<div class="pro-detial-rule">
				<div class="pro-detial-top">
					<div class="pro-detial-top-content" >
						<div>
							<template v-for="(item,index) in jies">
								<dl v-show="index<flag ">
									<dt>{{item.title}}</dt>
									<dd>{{item.text}}</dd>
								</dl>
							</template>
						</div>
					</div>
					<div class="pro-detial-top-more">
						<span class="pro-top-more-text" v-show="!sg" @click="zhankai">展开全部</span>
						<span class="pro-top-more-text" v-show="sg" @click="shouqi">收起</span>
					</div>
				</div>
				<div class="pro-detial">
					<div class="txq_container">
						<div class="txq_details">
							<p v-for="item in imgarr">
								<img :src="item" alt="">
							</p>
						</div>
					</div>
				</div>
			</div>
		</view>
		<div class="gl-footer">
			<div class="gl-other-wrap">
				<a class="customer-service" id="liveServerBtn">
					<i class="gl-icon ">
				🍕
					</i>
					<span class="gl-service-text">客服</span>
				</a>
				<div class="shop-car">
					<i class="gl-icon ">
					🛒
					</i>
					<span class="gl-shop-car-text">购物车</span>
				</div>
			</div>
			<ul class="bottom-btn-ul">
				<li class="group-buy-now eventLink choose-gl-btn" data-pclk="yqp_kt_details.event_buy_directly">单独购买￥209
				</li>
				<li class="group-buy open-group-buy eventLink  fx-center" data-pclk="yqp_kt_details.event_ct_button">
					新人参团￥199</li>
			</ul>

		</div>
		<span class="fanhui" :style="{display: sctop ? 'block' : 'none'}" @click='fhtop'>Top</span>
		</scroll-view>
	</view>
</template>
<script setup>
	import {
		typeone,
		supplierList
	} from "/pages/apis/apis.js"
	import {
		ref,onMounted
	} from 'vue'
	let imgs = ref([])
	let shuj = ref({})
	let pingj = ref([])
	let suppid = ref("")
	let tongl = ref([])
	let jies = ref(null)
	let imgarr = ref([])
	let flag = ref(3)
	let sg = ref(false)
	let sctop=ref(false)
	const pj = ref(0)
	let shap=ref(0)
	let xqtop=ref(0)
	typeone().then(res => {
		let ooo = []
		ooo.push(res.data[0].imgs.split("[")[1].split("]")[0].split(","))
		imgs.value = ooo[0]
		console.log(res.data[0]);
		imgarr.value = JSON.parse((res.data[0].descriptionImage))
		jies.value = JSON.parse((res.data[0].description))
		pingj.value = JSON.parse((res.data[0].comment))[0]
		shuj.value = res.data[0]
		suppid.value = shuj.value.supplier
		supplierList(suppid.value).then(res => {
			tongl.value = res.data
			console.log(tongl.value);
		})
	})
	const fhtop = ()=>{
		uni.pageScrollTo({
			scrollTop: 0,
			duration: 100
		}) 
	}
	const zhankai = () => {
		sg.value = true
		flag.value = 7
	}
	const shouqi = () => {
		console.log(1);
		sg.value = false
		flag.value = 3
	}
	const gund =(e)=>{
		
		if(e.detail.scrollTop>500){
		sctop.value=true
		}else if(e.detail.scrollTop<450){
			 sctop.value=false
		}
	}
	const sangp = ()=>{
			uni.pageScrollTo({
				scrollTop: 0
			}) 
	}
		
	const pjj = ()=>{
		uni.pageScrollTo({
			scrollTop: (shap.value-500),
			duration: 100
		}) 
	}
	const xinq = ()=>{
		uni.pageScrollTo({
			scrollTop: (xqtop.value-500),
			duration: 100
		}) 
	}
	onMounted(()=>{
		console.log(document.querySelector((".pro-detial-top-content")).getBoundingClientRect().top);
		xqtop.value=document.querySelector((".pro-detial-top-content")).getBoundingClientRect().top
		shap.value=document.querySelector((".gl-comment-numbers")).getBoundingClientRect().top
	})
</script>

<style scoped >
	.rqi {
		width: 100vw;
		height: 800rpx;
	}

	.ban {
		display: inline-block;
		width: 100%;
		height: 900rpx;
	}

	.gl-base-detial-wrap {
		box-sizing: content-box;
		width: 739rpx;
		height: 280rpx;
		padding: 1rem !important;
		background: #fff;
		font-family: PingFangSC-Regular;
	}

	.gl-base-detial-wrap .price-collec-info {
		position: relative;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		width: 739rpx;
		height: 42rpx;
		position: relative;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.gl-base-detial-wrap .price-collec-info .price {
		position: absolute;
		top: 0;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #ff3637;
	}

	.al-pay-hb {
		width: 250rpx;
		position: absolute;
		top: 15rpx;
		left: 200rpx;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		margin-left: .2rem;
		font-size: .2rem;
		color: #666;
		height: 22rpx;
		line-height: 22rpx;
		border: .0.2rem solid #ebebeb;
		border-radius: 10rpx;
		padding: 0 5rpx;
	}

	.al-pay-hb span {
		display: inline-block;
		width: 50rpx;
		height: 50rpx;
		background: url(https://static.biyao.com/mnew/img/product/editor_huabei24@2x_61f9e9e.png) no-repeat center left;
		background-size: 80% 80%;
	}

	.collect {
		position: absolute;
		top: 0rpx;
		right: 0;
		height: 42rpx;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		z-index: 99;
	}

	.collect i {
		display: inline-block;
		width: 50rpx;
		height: 50rpx;
		margin-right: .04rem;
		background: url(https://static.biyao.com/mnew/img/product/icon_collection_default@2x_6458530.png) no-repeat center;
		background-size: 100% 100%;
	}

	.collect p {
		font-size: 12px;
		color: #4a4a4a;
	}

	.makers-info {
		height: 84rpx;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}

	.markers-text {
		max-width: 443rpx;
		line-height: 40rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 14px;
		color: #bf9e6b;
	}

	.generate-time {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		font-size: .22rem;
		color: #bbb;
	}

	.product-h1-title {
		font-family: PingFangSC-Medium;
		height: 80rpx;
		line-height: 80rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 16px;
		color: #4a4a4a;
	}

	.product-h3-desc {
		height: 64rpx;
		font-size: 12px;
		line-height: 64rpx;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.gl-service-content {
		padding: 2rpx;
		width: 739rpx;
		height: 64rpx;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-sizing: content-box;
		box-sizing: content-box;
		background: #FFFBF2;
		margin-bottom: 24rpx;
	}

	.gl-service-content ul {
		width: 100%;
		height: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		justify-content: space-between;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.gl-service-content ul li {
		height: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		font-size: 12rpx;
		color: #bf9e6b;
	}

	.oon {
		height: 100%;
	}

	.group-list {
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		-webkit-justify-content: space-between;
		-webkit-align-items: center;
		align-items: center;
		height: 90rpx;
		border-top: solid .02rem #F4F4F4;
		padding-right: .01rem;
	}

	.zuo img {
		width: 50rpx;
		height: 50rpx;
	}

	.gl-rule-title {
		height: 90rpx;
		position: relative;
	}

	.gl-rule-title-l {
		position: absolute;
		left: 10rpx;
		font-size: 14px;
		color: #333;
	}

	.gl-rule-title-r {
		position: absolute;
		right: 10rpx;
		color: #828282;
	}

	.gl-rule-wrap img {
		width: 740rpx;
	}

	.gl-comment-header {
		position: relative;
		width: 700rpx;
		padding: 2rpx;
		height: 90rpx;
		border-bottom: 1rpx solid #ebebeb;
		line-height: 90rpx;
	}

	.gl-comment-header {
		display: inline-block;
		position: absolute;
		left: 10rpx;
	}

	.gl-comment-grades {
		display: inline-block;
		position: absolute;
		top: 0;
		right: 10rpx;
	}

	.gl-comment-box-warp {
		padding: 20rpx 0;
	}

	.gl-comment-box-content {
		margin-top: 100rpx;
		padding: 0 20rpx;
		width: 700rpx;
		box-sizing: border-box;
	}

	.person-head {
		width: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		justify-content: space-between;
	}

	.head-left img {
		width: 50rpx;
		height: 50rpx;
		border-radius: 50%;
	}

	.don {
		position: relative;
	}

	.head-left span {
		font-size: 14px;
		position: relative;
		top: -15rpx;
		left: 10rpx;
	}

	.head-right {
		position: absolute;
		right: 0;
		top: 0;
	}

	.head-right img {
		width: 50rpx;
		height: 50rpx;
	}

	.head-right span {
		font-size: 14px;
		position: relative;
		top: -10rpx;
		left: 10rpx;
		color: #EBBA67;
	}

	.gl-comment-time {
		color: #999;
		margin-bottom: 20rpx;
	}

	.gl-comment-detail {
		font-size: 16px;
	}

	.gl-supplier-wrap {
		position: relative;
		padding: 0 30rpx;
		height: 600rpx;
	}

	.supplier-info-wrap {
		height: 100rpx;
	}

	.supplier-info-wrap img {
		width: 100rpx;
		height: 100rpx;
	}

	.recommend-pic img {
		width: 200rpx;
		height: 200rpx;
	}

	.supplier-info-center {
		position: absolute;
		top: 30rpx;
		left: 150rpx;
	}

	.supplier-info-center p {
		color: #bbb;
	}

	.supplier-info-right {
		position: absolute;
		top: 50rpx;
		right: 0;
	}

	.commend-list {
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
	}

	.commend-list li {
		margin-right: 5rpx;
	}

	.commend-list-tit {
		width: 200rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.item-labels{
		margin-top: 20rpx;
	}
	.item-labels span {
		border: 1px solid red;
	}

	.item-price {
		color: #F7A701;
		margin-top: 10rpx;
	}

	.item-price span {
		font-size: 16px;
	}

	.pro-detial-rule {
		background-color: #f4f4f4;
	}

	.pro-detial-top {
		border-bottom: .015rem dotted #D9D9D9;
		padding: 12rpx 24rpx 0rem;
		background: #EEE;
	}

	dl {
		position: relative;
		height: 75rpx;
		border-bottom: 1px solid #CCC;
		;
		line-height: 75rpx;
	}

	dt {
		position: absolute;
		left: 0;
	}

	dd {
		position: absolute;
		left: 130rpx;
		height: 50rpx;
		overflow: hidden;
	}

	.pro-detial-top-more {
		text-align: center;
	}

	.txq_details img {
		width: 700rpx;
	}

	.header {
		position: relative;
		z-index: 99;
		overflow: hidden;
		-webkit-box-sizing: content-box;
		box-sizing: content-box;
	}

	.header-down {
		position: relative;
		height: 100rpx;
		padding: .06rem 0rem;
		background-size: cover;
		background-position: top;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	.header-price {
		height: 50rpx;
		line-height: 50rpx;
		margin: 20rpx 8rpx;
		padding: 0 16rpx;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #fff;
		text-align: center;
		border-right: #fff solid 1px;
	}

	.header-right {
		margin: 16rpx 8rpx;
		color: #fff;
	}

	.pro-detial-top-more {
		z-index: 999;
	}
	.gl-footer{
		width: 100vw;
		position: fixed;
		    bottom: 0;
		    left: 0;
		    background-color: #fff;
		    display: flex;
		    display: -webkit-flex;
		height: 100rpx;
		    background-color: #F4F4F4;
	}
	.gl-other-wrap {
	    position: relative;
	    height: 100%;
	    display: flex;
	    display: -webkit-flex;
	    justify-content: flex-start;
	    -webkit-justify-content: flex-start;
	    align-items: center;
	    -webkit-align-items: center;
	}
	.customer-service, .shop-car {
	    position: relative;
	    width: 100rpx;
	    height: 100%;
	    text-align: center;
	}
	.gl-icon {
	    display: block;
	    font-size: 16px;
	    color: #676767;
	}
	.bottom-btn-ul {
	    width: 550rpx;
	    position: relative;
	    display: flex;
	    display: -webkit-flex;
	    justify-content: space-around;
	    -webkit-justify-content: space-around;
	    align-items: center;
	    -webkit-align-items: center;
	    line-height: .96rem;
	    text-align: center;
	}
	.bottom-btn-ul li {
	    position: relative;
	    flex-grow: 1;
	    -webkit-flex-grow: 1;
	    font-size: 16px;
	    width: 50%;
	    height: 100rpx;
		line-height: 100rpx;
	    cursor: pointer;
		
	}
	.group-buy-now{
		    background: #fff;
		    color: #666;
	}
	.group-buy{
		color: #fff;
		    background-color: #8243a3;
	}
	.xisi{
		white-space:nowrap;
		width: 100%;
	}
	.aLinkJump{
		display: inline-block;
	}
	.tabs{
		margin-top: 80rpx;
		position: fixed;
		top: 0;
		width: 100%;
		 z-index: 101;
		height: 80rpx;
		line-height: .7rem;
		background: #fff;
		display: flex;
		display: -webkit-flex;
		justify-content: space-around;
		-webkit-justify-content: space-around;
		align-items: center;
		-webkit-align-items: center;
		 padding: 0 .2rem;
	}
	.fanhui{
		display: none;
		height: 100rpx;
		width: 100rpx;
		position: fixed;
		bottom: 150rpx;
		right: 30rpx;
		z-index: 999;
		background-color: pink;
		text-align: center;
		line-height: 100rpx;
		border-radius: 50%;
	}
</style>