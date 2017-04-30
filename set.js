/// <reference path="dfiles/bootbox.d.ts" />
/// <reference path="dfiles/all.d.ts" />

// 所有的 ajax 请求都要更新
$.ajaxSetup({'cache':false});

seajs.config({
	'alias':{
		'jqueryValidate':'libs/jquery-validate.js',
		'iscroll':'libs/iscroll.js',
		'artTemplate':'libs/artTemplate.js',
		'unslider':'libs/unslider.js',
		'lazyload':'libs/jquery-lazyload.js',
		'confirm':'libs/jquery-confirm.js',
		'countdown':'libs/countdown.js'
	},
	'map':[
		[ /^(.*\.(?:css|js))(.*)$/i, '$1?_=20160922']
	],
	//'base':'http://s1.91kuaiqiang.com/rs/js',
	'base':'//prev01.s1.51jujibao.com/rs/src',
	charset: 'utf-8'
});

var CONFIG = {
	'events':{
		'tap':$.support.touch ? 'click' : 'click'
	}
};

$(document).ready(function(){
	$('a.m-simpleHeader-back').on('click',function(e){
		e.preventDefault();
		try{
			history.go(-1);
		}catch(e){}
	});

	// 只在非购物车页面载入
	if(window.location.href.indexOf('cart/index.html') === -1){
		seajs.use(['kit/cart'],function(app){
			app.init();

		});
	}

});
