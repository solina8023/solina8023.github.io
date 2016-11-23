function id(obj){
    return document.getElementById(obj);
}
//点击事件
function bind(obj, ev, fn) { 
    if (obj.addEventListener) {
        obj.addEventListener(ev, fn, false);
    } else {
        obj.attachEvent('on' + ev, function() {
            fn.call(obj);
        });
    }
}
function view(){
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    };
}
function addClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) {
        obj.className = sClass;
        return;
    }
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) return;
    }
    obj.className += ' ' + sClass;
}

function removeClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) return;
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
            aClass.splice(i, 1);
            obj.className = aClass.join(' ');
            break;
        }
    }
}
//预加载图片
function sLoad(){
	var load = document.getElementById('welcome');
	var arr = [];
	//通过变量记载是否所有图片加载完成；
	var imgload = true;//判断图片加载完毕后变成true；
	var btime = false;//整个动画是否运行完毕；
	var stime = new Date().getTime();
	var timer = 0;
	timer = setInterval(function(){
		if(new Date().getTime()-stime>=5000){//当前的时间减去开始的时间大于等于5s的话
			btime = true;
		}
		if(imgload && btime){
//			alert('执行跳转')
			clearInterval(timer);
			load.style.opacity=0;
//			removeClass(load,"show");
//			tabPic();//动画完成，首页进入；
			end();
		}
	},1000)
	//动画完成；
	function end(){
		var index = id('index')
//		alert(1)
		removeClass(load,"show");
		addClass(index,'show')
		tabPic();
	}
}
//首页
function tabPic(){
	var tabPic = id('tabPic');
	var list = id("list");
	var as = tabPic.getElementsByTagName('nav')[0].children;
	var now = 0;//当前选中的是第0个；
	var x = 0;//用来记录translate的状态；
	var screenW = view().w;//记录屏幕的宽度；
	//alert(screenW)设置好的640px;
	//自动播放
	var timer = 0;
	var startTouchX = 0;//记录手指当前触摸的位置；
	var startX = 0;//当前的开始位置；
	
	bind(tabPic,'touchstart',start);
	bind(tabPic,'touchmove',move);
	bind(tabPic,'touchend',end);
	
	autoplay();
	//判断，如果没有调用，就调用一次，如果调用过了，就不再调用
	star();

//	star();//进入到首页之后才会进入评分；
	
	function autoplay(){
		timer = setInterval(function(){
			now++;
			now = now%as.length;
			tab();
		},2000); 
	}
		
//	//手指碰上的时候
	function start(ev){
		list.style.transition = 'none';
		//手指坐标获取[是个列表数据，多指触碰的情况]；
		ev = ev.changedTouches[0];//只记录当前的第一个；
		//alert(1)
//		console.log(ev)
		startTouchX = ev.pageX;//当前手指相对于屏幕的位置；
		startX = x;//当前元素所处的位置；
		clearInterval(timer);//手指触摸的时候清除定时器；
	}
	
//	//手指滑动的时候
	function move(ev){
		ev = ev.changedTouches[0];
		//手指现在的位置-手指开始在的位置=手指在屏幕上一动的距离；
		var dis = ev.pageX - startTouchX;
		x = startX+ dis;//让元素跟着移动的距离在走；
		list.style.transform = list.style.WebkitTransform = 'translateX('+x+'px)';
	}
	
	function end(){
		now = x/screenW;//移动的距离/屏幕的宽度
		now = -Math.round(now);
		if(now<0){
			now = 0;
		}
		if(now>=as.length-1){
			now = as.length-1;
		}
		tab();
		autoplay();
	}
	
	//阻止浏览器的默认移动事件；
//	bind(document,'touchmove',function(ev){
//		ev.preventDefault();
//	})//这段代码必须去掉猜可以展示不同大小屏幕出现的滚动条问题；
	
	//图片切换
	function tab(){
		x = -now*screenW;
		list.style.transition = '0.5s';
		list.style.transform = list.style.WebkitTransform = 'translateX('+x+'px)';
		for(var i=0;i<as.length;i++){
			removeClass(as[i],'active');
		}
		addClass(as[now],'active');
	}
}

//星星评分；
function star(){
	var star = id('star');
	var lis = star.getElementsByTagName('li');
	var arr=["好失望","没有想象的那么差","很一般","良好","棒极了"];
	for(var i=0;i<lis.length;i++){
		fn(lis[i]);
	}
	function fn(li){
		var as = li.getElementsByTagName('a');
		//console.log(as[0],as[1],as[2])
		var input = li.getElementsByTagName('input')[0];
		//console.log(as)
		for(var i=0;i<as.length;i++){
			as[i].index = i;
			bind(as[i],'touchstart',function(){
				//alert(this.index)
				for(var i=0;i<as.length;i++){
					if(i<=this.index){
						addClass(as[i],'active');
//						alert(this.index)
					}else{
						removeClass(as[i],'active');
					}
				}
				input.value = arr[this.index];
			})
		}
	}
	
	fnIndex();

	
}

//验证提交
function fnIndex(){
	var index= id('index');
	var btn = index.getElementsByClassName('btn')[0];
	var info = index.getElementsByClassName('info')[0];
	var onOff = false;//设置一个开关用来监控星星是否被选中的状态；
	bind(btn,'touchend',fnEnd);
	function fnEnd(){
//		alert(1);
		onOff = starChecked();//没有全部选完的话是false。全部选择完毕显示true；
		//alert(onOff)	
		//判断完星星再判断标签部分
		if(onOff){//事件不成立，调用info的内容；
			if(tagChecked){
//				alert(1)
			}else{
				fnInfo(info,'给景区添加标签');
			}
		}else{
			fnInfo(info,'给景区评分');
		}
	}
	//判断星星是否被选中；
	function starChecked(){
		var star = id('star');
		var inputs = star.getElementsByTagName('input');
//		console.log(1);
		for(var i=0;i<inputs.length;i++){
			if(inputs[i].value == 0){
				return false;
			}
		}
		return true;
	}
	//判断标签内容有没有被选中；
	function tagChecked(){
		var indexTag = id('indexTag');
		var inputs = indexTag.getElementsByTagName('input');
		for(var i=0;i<inputs.length;i++){
			if(inputs[i].checked){
				return true;
			}
		}
		return false;
	}
}
//info 的内容
function fnInfo(info,send){
	info.innerHTML=send;
	
	info.style.WebkitTransform="scale(1)";
	info.style.opacity=1;
	setTimeout(function(){
		info.style.WebkitTransform="scale(0)";
		info.style.opacity=0;
	},1000);
}
function fnIndex(){
	var index=id('index');
	var btn=index.getElementsByClassName("btn")[0];
	var info=index.getElementsByClassName("info")[0];
	var onOff=false;
	bind(btn,"touchend",fnEnd);
	function fnEnd(){
		onOff=starChecked();
		if(onOff){
			if(tag()){
//				alert(1)
				fBreak();	
			}
			else{
				fnInfo(info,"给景区添加标签");	
			}
		}else{
			fnInfo(info,"给景区评分");
		}
	}
	function starChecked(){
		var star=id('star');
		var inputs=star.getElementsByTagName("input");
		for(var i=0;i<inputs.length;i++){
			if(inputs[i].value==0){
				return false;
			}
		}
		return true;
	}
	function tag(){
		var indexTag = id('indexTag');
		var inputs = indexTag.getElementsByTagName("input");
		for(var i=0;i<inputs.length;i++){
			if(inputs[i].checked){
				return true;
			}
		}
		return false;
	}
	
}

//首页的跳出；
function fBreak(){
	var mask = id('mask');
	var index= id('index');//css3里的模糊处理，需要给整个页面加
	var news = id('news');
	addClass(mask,'show');
	addClass(news,'show');

	fnNews();//跳转到新闻页面

	
	//页面渲染过程中加 transition 是不起效果的，所以要加上一个延时的定时器动画才能显示；
	setTimeout(function(){
		mask.style.opacity = 1;
		index.style.filter = index.style.WebkitFilter = 'blur(5px)';
	},20)
	//重新评价的时候出现的是首页页面
	setTimeout(function(){
		news.style.transition = '0.5s';
		mask.style.opacity = 0;
		index.style.filter = index.style.WebkitFilter = 'blur(0)';
		news.style.opacity = 1;
		removeClass(mask,'show');
	},2000)
}

//点击新闻线索跳转页面；
function fnNews(){
	var news = id('news');
	var inputs = news.getElementsByTagName('input');
	var info = news.getElementsByClassName('info')[0];
	inputs[0].onchange = function(){
		if(this.files[0].type.split('/')[0] == 'vedio'){
			fnNewsOut();
			this.value="";
		}else{
			
			fnInfo(info,'请上传视频');
		}
	};
	inputs[1].onchange = function(){
		if(this.files[0].type.split('/')[0] == 'image'){
			fnNewsOut();
			this.value="";
		}else{
			
			fnInfo(info,'请上传照片');
		}
	};
}

//新闻跳转到评论页；
function fnNewsOut(){
	var news = id('news');
	var form = id('form');
	 addClass(form,'show');
    removeClass(news,'show');
    news.style.cssText = '';
   
//  if(!window.formIn){
    	formIn();
//  	formIn = true;
//  } 
}

//上传按钮
function formIn(){
	var form = id('form');
	//var formTag = id('formTag');
	var labels = id('formTag').getElementsByTagName('label');
	var btn = form.getElementsByClassName('btn')[0];
	var onOff = false;//判断是否可以提交；设置开关判断选中的状态；
	var over = id('over');
	for(var i=0;i<labels.length;i++){
		bind(labels[i],'touchend',function(){
			//alert(1)
			onOff = true;
			addClass(btn,'submit');
		})
	}
	bind(btn,'touchend',function(){
		if(onOff){
			for(var i=0;i<labels.length;i++){
				bind(labels[i],"touchend",function(){
					onOff=true;
					addClass(btn,"submit");
				});
			}
			
			addClass(over,'show');
			removeClass(form,'show');
			removeClass(btn,'submit');
			fnOver();
		}
	})
}

//点击重新上传返回到首页；
function fnOver(){//避免和变量重名
	var over = id('over');
	var btn = over.getElementsByClassName('btn')[0];
	bind(btn,'touchend',function(){
		removeClass(over,'show');
	})
	
}
