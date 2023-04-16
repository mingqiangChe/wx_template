<template>
		<view class="container">
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="item in imglist" :key="item.id">
					<view class="swiper-item">
						<image :src="item.url" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		props: {
			imglist: {
				type: Array,
				default: function() {
					return [{
						id: 0,
						url: '../../../static/iu_01.webp'
					}, {
						id: 1,
						url: '../../../static/iu_01.webp'
					}, {
						id: 2,
						url: '../../../static/iu_01.webp'
					}, {
						id: 3,
						url: '../../../static/iu_01.webp'
					}]
				}
			}
		},
		// onload onshow 在这里不生效
		// onLoad() {
		// 	console.log('轮播页onload');
		// 	console.log(this.imglist, '列表数据');
		// },
		// onShow(){
		// 	console.log('轮播页onload');
			
		// },
		mounted() {
			console.log('哈哈哈哈');
			console.log(this.imglist, '列表数据');
		}
	}
</script>

<style>
	.uni-margin-wrap {
		width: 750rpx;
	}

	.swiper {
		height: 560rpx;
	}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}

	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}

	.info {
		position: absolute;
		right: 20rpx;
	}

	.uni-padding-wrap {
		width: 750rpx;
		padding: 0 100rpx;
	}
</style>
