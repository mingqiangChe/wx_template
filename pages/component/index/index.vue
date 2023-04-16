<template>
	<view>
		<view class="swiper_img">
			<swiperimg :imglist='swiper1'></swiperimg>
		</view>
		<!-- 入会积星 尊享权益 -->


		<view class="swiper_img">
			<swiperimg :imglist='swiper2'></swiperimg>
		</view>
		<!-- 地址 -->
		<addresss></addresss>
	</view>
</template>

<script>
	import swiperimg from '@/pages/component/components/swiperImg.vue'
	import addresss from '@/pages/component/components/index/addresss.vue'
	export default {
		data() {
			return {
				// 自定义首页轮播图传入
				swiper1: [{
					url: '../../../static/iu_01.webp'
				}, {
					url: '../../../static/iu_02.webp'
				}, {
					url: '../../../static/iu_03.webp'
				}, {
					url: '../../../static/iu_04.webp'
				}],

				swiper2: [{
					url: '../../../static/yun_01.webp'
				}, {
					url: '../../../static/yun_02.webp'
				}, {
					url: '../../../static/yun_03.webp'
				}, {
					url: '../../../static/yun_04.jpeg'
				}],
			}
		},
		components: {
			swiperimg,
			addresss
		},
		methods: {

		}
	}
</script>

<style>

</style>
