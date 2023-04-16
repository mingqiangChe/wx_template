<template>
	<view class="container">
		<view class="addresss">
			<view class="address_left">
				{{address}}
			</view>
			<view class="address_right">
				<image class="imgg" :src="dressPeople" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				// 地址
				address: '福永同泰店',
				addressImg: '../../../../static/address.png',
				addressPeople: '../../../../static/bangbagn.webp',
			}
		}
	}
</script>

<style>
	.addresss {
	/* 	display: flex;
		padding: 0 30rpx; */
	
	}
	.addresss .address_left {}
	
	.address_right {
		width: 60rpx;
		height: 40rpx;
	
	}
	.address_right .imgg {
		width: 60rpx !important;
		height: 40rpx !important;
	}
</style>