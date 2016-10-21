//class名字是一样的，所以前面声明的变量名字得换；
var bg2 = document.getElementsByClassName('bg2')[0];
var close2 = bg2.getElementsByClassName('close')[0];
var turn2 = close2.getElementsByClassName('turn')[0];
var boxb = document.getElementById('boxb');
var mains2 = boxb.getElementsByClassName('mains')[0];
var prev2 = boxb.getElementsByClassName('prev')[0];
var next2 = boxb.getElementsByClassName('next')[0];
var arrc = ['b1.png','b2.png','b3.png','b4.png','b5.png','b6.png','b7.png','b8.png','b9.png'];
var num = 0;
//点击下一个
next2.onclick = function(){
	num++;
	if(num>arrc.length-1){
		num = 0;
	}
	mains2.src = 'imgs/about/' + arrc[num];
};
//点击上一个
prev2.onclick = function(){
	num--;
	if(num<0){
		num = arrc.length-1
	}
	mains2.src = 'imgs/about/' + arrc[num];
};
var dis = document.getElementsByClassName('dis')[0];
var as2 = dis.getElementsByTagName('a');
//下面按钮的切换
for(var i=0;i<as2.length;i++){
	as2[i].index = i;
	as2[i].onclick = function(){
		num = this.index;
		mains2.src = "imgs/about/" + arrc[this.index];
	}
}
//最后一个按钮的时候后音乐播放
as2[8].onclick = function(){
	var music = new Audio("mp3/爱情转移.mp3");
	music.play();
	mains2.src = "imgs/about/" + arrc[this.index];
};
//点击关闭按钮的时候
var turn2 = close2.getElementsByClassName('turn')[0];
var circle = document.getElementsByClassName('circle')[0];
turn2.onclick = function(){
	bg2.style.display = 'none';
	circle.style.display = "block";
};