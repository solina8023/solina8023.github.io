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
//固定定位部分的
//左侧导航条的动画效果；
var list=document.getElementById('list');
var lis_a=list.getElementsByTagName('li');
footer();                        
function footer(){
    for(var i=0;i<lis_a.length;i++){
    	lis_a[i].index=i;
        lis_a[i].onclick=function(){
	        switch(true){
	         	case this.index==0:scroll_To(650);
	         	break;
	         	case this.index==1:scroll_To(1300);
	         	break;
	         	case this.index==2:scroll_To(1950);
	         	break;
	         	case this.index==3:scroll_To(2600);
	         	break;
	         	case this.index==4:scroll_To(0);
	        }
    	}
    }
	function scroll_To(tar_y){ //tar_y 即滑动条顶端 距离页面最上面的距离   
	    setTimeout(function(){  
	        var current_y = document.body.scrollTop||document.documentElement.scrollTop;  
	        step = 40 //步长系数 即剩余的距离除以40 每1ms 移动一段距离  
	        if (tar_y>current_y){ //tar_y > current_y 即向下滚动  
	            var dist = Math.ceil((tar_y-current_y)/step)  
	            var next_y = current_y+dist  
	            if(next_y<tar_y){  //向上滚动和向下滚动判定的区别 是这里！！  
	                window.scrollTo(0,next_y)     
	                scroll_To(tar_y)  
//	                console.log('向下')  
	            }  
	        }else{ //tar_y < current_y 即向上滚动  
	            var dist = Math.floor((tar_y-current_y)/step)  
	            var next_y = current_y+dist  
	            if(next_y>tar_y){  
	                window.scrollTo(0,next_y)  
	                scroll_To(tar_y)  
	//              console.log('向上')  
	            } 
	        }  
	    },1)  
	}  
}  