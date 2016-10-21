//li的hover效果的实现；
var bg = document.getElementsByClassName('bg')[0];
var btn = bg.getElementsByClassName('btn')[0];
var lisb = btn.getElementsByTagName('li'); 
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
lisb[0].onclick = function(){
	box1.style.display = 'block';
	box2.style.display = 'none';
	box3.style.display = 'none';
};
lisb[1].onclick = function(){
	box1.style.display = 'none';
	box2.style.display = 'block';
	box3.style.display = 'none';
};
lisb[2].onclick = function(){
	box1.style.display = 'none';
	box2.style.display = 'none';
	box3.style.display = 'block';
};
//第一个图片的li切换；
var box1 = document.getElementById('box1');
var arra = ['main_a1.png','main_a2.png','main_a3.png'];
var mains = box1.getElementsByClassName('mains')[0];

var prev = box1.getElementsByClassName('prev')[0];
var next = box1.getElementsByClassName('next')[0];
var num = 0;
next.onclick = function(){
	num++;
	if(num>arra.length-1){
		num = 0;
	}
	mains.src = 'imgs/about/' + arra[num];
}
prev.onclick = function(){
	num--;
	if(num<0){
		num = arra.length-1
	}
	mains.src = 'imgs/about/' + arra[num];
}
//li第二个的图片切换
var box2 = document.getElementById('box2');
var arrb = ['main1.png','main2.png','main3.png','main4.png'];
var step = box2.getElementsByClassName('step')[0];
var next = box2.getElementsByClassName('next')[0];
var prev = box2.getElementsByClassName('prev')[0];
var num = 0;
(next.onclick = function(){
	num++;
	if(num>arrb.length-1){
		num = 0;
	}
	step.src = 'imgs/about/' + arrb[num];
})();
(prev.onclick = function(){
	num--;
	if(num<0){
		num = arrb.length-1;
	}
	step.src = 'imgs/about/' + arrb[num];
})();

//第三个图片的切换；
var box3 = document.getElementById('box3');
var role = box3.getElementsByClassName('role')[0];
var arrc = ['main31.png','main32.png'];
var arrd = ['maina.png','mainb.png'];
var bnext = box3.getElementsByClassName('bnext')[0];
var num = 0;
//点击切换taste和band；
var taste = box3.getElementsByClassName('taste')[0];
var band = box3.getElementsByClassName('band')[0];
(taste.onclick = function(){
	role.src = 'imgs/about/maina.png';
	bnext.onclick = function(){
		num++;
		if(num>arrc.length-1){
			num = 0;
		}
		role.src = 'imgs/about/' + arrd[num];
	}
})();
(band.onclick = function(){
	role.src = 'imgs/about/main31.png';
	bnext.onclick = function(){
		num++;
		if(num>arrd.length-1){
			num = 0;
		}
		role.src = 'imgs/about/' + arrc[num];
	}
})();

//点击关闭按钮关闭当前背景框
var turn = document.getElementsByClassName('turn')[0];
var circle = document.getElementsByClassName('circle')[0];
turn.onclick = function(){
	bg.style.display = 'none';
	circle.style.display = "block";
};
