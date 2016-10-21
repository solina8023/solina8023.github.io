var adv6_1 = document.getElementsByClassName('adv6-1')[0];
var a = adv6_1.getElementsByTagName('a')[0];
var img = a.getElementsByTagName('img')[0];
var boxA = document.getElementById('boxA');
img.onclick = function(){
	adv6_1.style.display = 'none';
	boxA.style.display = 'block';
};
//点击上一张下一张的时候
clickB();
function clickB(){
	var boxA = document.getElementById('boxA');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var ul = boxA.getElementsByTagName('ul')[0];
    var lis = ul.getElementsByTagName('li');
    var len = lis.length;
    var w = 821;
    var cur = 0;
    ul.style.width = len * w + 'px';
    prev.onclick=function(){
   	    cur++;
        m();
      return false;
    };
    next.onclick=function(){
   	    cur++;
        m();
        
      return false;
   	 
    }
    function m() {
       //当cur的值为1的时候，那么就需要把第一张图片放到最后面，等下运动进来
        if(cur == len){
            lis[0].style.left = len*w + 'px';
        }
        //当cur为2的时候，表示现在显示的图片和初始化的时候显示的图片是一致的，那么这个时候，先不要急着继续运动，
        //我们把第一张图片放回原来的位置，把ul复位成初始化的位置
        if(cur == len+1){
            lis[0].style.left = '0px';
            ul.style.left = '0px';
            cur = 1;
        }
        if (cur == 0){
            lis[0].style.left = '0px';
       }
       move(ul, {left: -(cur*w)}, 1000, 'easeOutStrong');
    }
}