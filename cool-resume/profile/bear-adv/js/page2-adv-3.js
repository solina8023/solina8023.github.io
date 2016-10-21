var bg3 = document.getElementsByClassName('bg3')[0];
var butn = bg3.getElementsByClassName('butn')[0];
var as1 = butn.getElementsByTagName('a');
var ps = butn.getElementsByTagName('p');
var arre = ['3a_01.png','3a_02.png','3a_03.png','3a_04.png'];
as1[0].style.background = 'url(imgs/about/'+arre[0]+') no-repeat';
for(var i=0;i<as1.length;i++){
	as1[i].index = i;
	as1[i].onclick = function(){
		for(var i=0;i<as1.length;i++){
			as1[i].style.background = '';
			ps[i].className = '';
		}
		this.style.background = 'url(imgs/about/'+arre[this.index]+') no-repeat';
		ps[this.index].className = 'active';
	};
}

//点击关闭按钮关闭当前背景
var turn3 = bg3.getElementsByClassName('turn')[0];
var circle = document.getElementsByClassName('circle')[0];
turn3.onclick = function(){
	bg3.style.display = 'none';
	circle.style.display = "block";
};