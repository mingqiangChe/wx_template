<template>
	<view class="contain_box">
		<view @click="tabChange(index)" class="imgs_box" v-for="(item,index) in list" :key="index">
			<view :class="index==2 ?'imgs':''">
				<image :class="index== 2 ? 'active2' :'imggg',index == defaultAcives && index !==2 ? 'activeImg' : ''"
					:src=" index==defaultAcives ? item.active :item.url" mode="">
				</image>
			</view>
			<text v-if="index!== 2" :class="index == defaultAcives ? 'activeText' :'' ">{{item.title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				defaultAcives: 0,
				list: [{
					url: '../../../static/star_01.png',
					active: '../../../static/star_02.png',
					title: '首页'
				}, {
					url: '../../../static/club_01.png',
					active: '../../../static/club_02.png',
					title: '星享俱乐部'
				}, {
					url: '../../../static/code.png',
					active: '',
					title: ''
				}, {
					url: '../../../static/goods_01.png',
					active: '../../../static/goods_02.png',
					title: '订单'
				}, {
					url: '../../../static/my_01.png',
					active: '../../../static/my_02.png',
					title: '我的'
				}]
			}
		},
		onLoad() {
			this.defaultAcives = this.defaultAcive
		},
		props: {
			defaultAcive: {
				type: Number,
				default: 0
			}
		},
		watch: {
			defaultAcive: function(newValue, oldValue) {
				console.log(newValue, '监听tab');
				this.defaultAcives = newValue
			}
		},
		computed: {},
		methods: {
			tabChange(i) {
				console.log(i, '点击下标');
				this.$emit('tabchanges', i)
			}
		}
	}
</script>

<style scoped lang="scss">
	.contain_box {
		width: 750rpx;
		height: 120rpx;
		background-color: #fff;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		display: flex;
		justify-content: space-around;
		position: relative;
		color: darkgray;
		font-size: 16rpx;

		.imgs_box {
			display: flex;
			flex-direction: column;
			align-items: center;

			.imgs {
				width: 88rpx;
				height: 88rpx;
				border-radius: 50%;
				background-color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				bottom: 54rpx;
			}

			.noActiveText {
				color: red;
			}
		}
	}

	.imggg {
		width: 68rpx;
		height: 68rpx;
	}

	.active2 {
		width: 78rpx;
		height: 78rpx;
		padding: 22rpx;
		background-color: darkgreen;
		border-radius: 50%;
	}

	.activeText {
		color: black !important;
	}
</style>
