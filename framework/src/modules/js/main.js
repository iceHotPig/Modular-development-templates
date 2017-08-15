//guidance
var guidance = {
	init: function() {
		require(['jquery','swiper'],function($,swiper){
			$(document).ready(function(){
				var mySwiper = new Swiper('.swiper-container', {
					autoplay: 5000,//可选选项，自动滑动
				})
				var mySwiper = new Swiper('.swiper-container',{
					pagination : '.swiper-pagination',
					paginationType : 'fraction',
					//pagination : '#swiper-pagination1',
				})
			})
		})
	}
}
exports.guidance = guidance;
