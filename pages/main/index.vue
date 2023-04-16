<template>
	<view class="content">
		<index v-if="defaultAcive==0"></index>
		<club v-else-if="defaultAcive==1"></club>
		<scanCode v-else-if="defaultAcive==2"></scanCode>
		<goodsx v-else-if="defaultAcive==3"></goodsx>
		<my v-else-if="defaultAcive==4"></my>
		<navbar class="nav_box" :defaultAcive='defaultAcive' @tabchanges='tabchanges'></navbar>
	</view>
</template>

<script>
	import navbar from '@/pages/component/components/tabbar.vue'
	import index from '@/pages/component/index/index.vue'
	import club from '@/pages/component/club/club.vue'
	import scanCode from '@/pages/component/scanCode/scanCode.vue'
	import goodsx from '@/pages/component/goods/goods.vue'
	import my from '@/pages/component/my/my.vue'
	// 建立全局对象 只针对小程序
	const {
		globalData
	} = getApp()
	export default {
		data() {
			return {
				defaultAcive: 0,
			}
		},
		components: {
			navbar,
			index,
			club,
			scanCode,
			goodsx,
			my
		},
		onLoad() {},
		methods: {
			tabchanges(v) {
				console.log(v, '787')
				if (v != 2) {
					this.defaultAcive = v
				}
				console.log(this.defaultAcive, '777');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: red;

		.nav_box {
			position: fixed;
			bottom: 0%;
		}
	}
</style>
