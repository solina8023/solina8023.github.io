//气球1的运动；
var ballon1 = document.getElementsByClassName('ballon1')[0];
//初始化，在页面打开的时候气球是在运动的；
mTween(ballon1,'top',20,2000,'linear',function(){
		mTween(ballon1,'top',70,2000,'linear')
	})
//添加定时器
setInterval(function(){
	mTween(ballon1,'top',20,2000,'linear',function(){
		mTween(ballon1,'top',70,2000,'linear')
	})
},4000)
//气球2的运动
var ballon2 = document.getElementsByClassName('ballon2')[0];
//初始化
mTween(ballon2,'top',60,2500,'linear',function(){
		mTween(ballon2,'top',0,2500,'linear')
	})
setInterval(function(){
	mTween(ballon2,'top',60,2500,'linear',function(){
		mTween(ballon2,'top',0,2500,'linear')
	})
},5000)
//飞机的运动；
var airplane = document.getElementById('airplane');
airplane.style.transition = '16s';
airplane.style.right = '1200px';
setInterval(function(){
	airplane.style.transition = '14s';
	airplane.style.right = '1200px';
	setTimeout(function(){
		airplane.style.transition = '0s';
		airplane.style.right = '-300px';
	},6000)
},9000)
