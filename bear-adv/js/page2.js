var circle = document.querySelector('.circle');
var lis = circle.getElementsByTagName('li');
var bg = document.querySelector('.bg');
var bg2 = document.getElementsByClassName('bg2')[0];
var bg3 = document.getElementsByClassName('bg3')[0];
var text = document.getElementsByClassName('text')[0];
//点击li的时候广告定位出现
lis[0].onclick = function(){
	circle.style.display = 'none';
	bg.style.display = 'block';
	text.style.display = 'none';
}
lis[1].onclick = function(){
	circle.style.display = 'none';
	bg2.style.display = 'block';
	text.style.display = 'none';
}
lis[2].onclick = function(){
	circle.style.display = 'none';
	bg3.style.display = 'block';
	text.style.display = 'none';
}

	var btn = document.getElementsByClassName('btn')[0];
	var as = btn.getElementsByTagName('a');
	var imgs = btn.getElementsByTagName('img');
//小熊的诞生轮播图效果；
	var box1 = document.getElementById('box1');
	var arr = ['main_a1.png','main_a2.png','main_a3.png'];
	var mains = box1.getElementsByClassName('mains')[0];
	var prev = box1.getElementsByClassName('prev')[0];
	var next = box1.getElementsByClassName('next')[0];
	var num = 0;
	next.onclick = function(){
		num++;
		if(num>arr.length-1){
			num = 0;
		}
		mains.src = 'imgs/about/' + arr[num];
	}
	prev.onclick = function(){
		num--;
		if(num<0){
			num = arr.length-1
		}
		mains.src = 'imgs/about/' + arr[num];
	}
//落雨的过程
var rain = document.getElementById('raining');
rain.style.top = '-150px';
setInterval(function(){
	mTween(rain,'top',137,900,'linear',function(){
		rain.style.top = '0';
		mTween(rain,'top',137,900,'linear')
	})
},950)
