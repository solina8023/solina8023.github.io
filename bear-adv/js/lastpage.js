var adv6_1 = document.getElementsByClassName('adv6-1')[0];
var a = adv6_1.getElementsByTagName('a')[0];
var img = a.getElementsByTagName('img')[0];
var back = document.getElementsByClassName('back')[0];
img.onclick = function(){
	adv6_1.style.display = 'none';
	back.style.display = 'block';
};

//点击上一张下一张的时候
var arrp = ['1.jpg','2.jpg'];
var num = 0;
var active = document.getElementsByClassName('active')[0];
var prevV = document.getElementById('prev');
var nextV = document.getElementById('next');
var imgR = document.getElementById('ppp');
imgR.src = 'imgs/download/' + arrp[0];
nextV.onclick = function(){
	num++;
	if(num>arrp.length-1){
		num = 0;
	}
	imgR.src = 'imgs/download/'+arrp[num];
};
prevV.onclick = function(){
	num--;
	if(num<0){
		num = arrp.length-1;
	}
	imgR.src = 'imgs/download/'+arrp[num];
};