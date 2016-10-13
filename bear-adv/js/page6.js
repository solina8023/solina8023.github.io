//最后一页：
var back = document.getElementsByClassName('back')[0];
var active = document.getElementsByClassName('active')[0];
var adv6 = document.getElementsByClassName('adv6-1')[0];
var as = active.getElementsByTagName('a');
adv6.onclick = function(){
	this.style.display = 'none';
	active.style.display = 'block';
}

