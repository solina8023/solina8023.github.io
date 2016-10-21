var home = document.getElementsByClassName('home')[0];
var Aa = document.getElementById('Aa');
//点击home返回产品展示页面
home.onclick = function(){
	Aa.style.display = 'none';
	main.style.display = 'block';
};
var main = document.getElementsByClassName('main')[0];
var lis = main.getElementsByTagName('li');
for(var i=0;i<lis.length;i++){
	lis[i].onclick = function(){
		Aa.style.display = 'block';
		main.style.display = 'none';
	}
}
var cell_bts = document.getElementsByClassName('cell-bt');
var sp = document.getElementsByClassName('sp')[0];
var sp_close = sp.getElementsByClassName('sp_close')[0];
//点击关闭按钮关闭当前显示
for(var i=0;i<cell_bts.length;i++){
	cell_bts[i].onclick = function(){
		sp.style.display = 'block';
	};
	sp_close.onclick = function(){
		sp.style.display = 'none';
	};
}
var cate_1 = document.getElementsByClassName('cate-1')[0];
var cate_2 = document.getElementsByClassName('cate-2')[0];
var pro_1 = document.getElementsByClassName('pro-1')[0];
var pro_2 = document.getElementsByClassName('pro-2')[0];
var right_box = document.getElementsByClassName('right-box')[0];
var pic_1 = document.getElementsByClassName('pic-1')[0];
var pimg = pic_1.getElementsByTagName('img')[0];
var arrCC = [
['b1.png','b2.png'],['c1.png','c2.png'],['d1.png','d2.png'],['e1.png','e2.png'],
['f1.png','f2.png'],['g1.png','g2.png'],['h1.png','h2.png'],['i1.png','i2.png'],['a1.png','a2.png']
];
//封装函数
function change1(num){
	pro_1.style.display = 'block';
	pro_2.style.display = 'none';
	pimg.src = 'imgs/product/' + arrCC[num][0];
	right_box.style.background = 'url(imgs/product/pro1_bg.png)';
}
function change2(num){
	pro_2.style.display = 'block';
	pro_1.style.display = 'none';
	pimg.src = 'imgs/product/' + arrCC[num][1];
	right_box.style.background = 'url(imgs/product/pro2_bg.png)';
}
//点击每种口味的时候、每个的样式显示出来；
var content = document.getElementsByClassName('content')[0];
var mainul = document.getElementById('mainul');
var main_lis = mainul.getElementsByTagName('li');
var title = document.getElementsByClassName('title')[0];
var type = pro_1.getElementsByClassName('type')[0];
var str = '';
var arrAA = ['草莓口味','牛奶口味','抹茶/蜜糖吐司','季節限定','超值組合','造型禮盒','迷你包系列','限量產品'];
var arrBB =[['酥脆的餅乾裡搭配了香濃滿滿的草莓內餡，一口咬下即可享受餅乾的香氣與草莓的美味。酥脆餅乾上還有可愛的小熊圖案，共有285種喔！'],
['將充滿香濃牛奶風味的白巧克力內餡，包覆在酥脆的餅乾裡。一口咬下即可享受餅乾的香氣搭配濃郁的白巧克力風味！酥脆餅乾上還有可愛的小熊圖案，共有285種喔！'],
['每一口都可以吃的到日本人氣甜點蜜糖吐司喔!!!樂天小熊餅乾推出了新口味-蜜糖土司，將酥脆可口的餅乾體中注入滿滿焦香奶油風味巧克力，結合濃醇蜂蜜香，一吃就無法停手的美味。最適合嚮往日本年輕上班族與小朋友跟媽媽。'],
['去年熱銷的樂天小熊餅-可可歐蕾口味，今年隆重推出盒裝版，要讓大朋友小朋友一口接一口，越吃越好吃。可可風味的酥脆的餅皮搭配上香濃的牛奶風味白巧克力內餡形成絕妙口感，最適合在冬天裡享用。外盒以手繪的小熊加上全黑的設計更是呈現出可愛又精緻的風格，獨特期間限定版可可歐蕾口味新登場。'],
['樂天小熊餅乾巧克力 37g×1樂天小熊餅乾草莓 37g×1 樂天小熊餅乾牛奶 37g×1'],
['可愛的樂天小熊要來陪大家過新年囉！裡面有暢銷的巧克力與草莓口味小熊餅乾，還有樂天小熊拼圖，讓家人、同學、朋友們一起分享一起玩樂，是大朋友小朋友最佳的選擇。'],
['繽紛的樂天小熊歡欣禮盒~裡面有巧克力與草莓兩種暢銷口味的樂天小熊餅乾，還有附贈樂天小熊超可愛馬克杯一款，讓樂天小熊時時刻刻陪你過每一天!'],
['超級可愛的樂天小熊又來給大家好康囉！一盒裡面有兩種熱銷口味，巧克力與草莓口味的小熊餅乾，再附贈兩款樂天小熊可愛紅包袋，讓你新年樂翻天~']
];
var arrDD = [
['<li>售價：39元/盒</li><li>規格：37克/盒‧48盒/箱</li><li>素食說明 : 蛋奶素</li>',
 '<li>售價：179元/盒</li><li>規格：195克/盒‧10盒/箱</li><li>素食說明 : 蛋奶素</li>'],
 ['<li>售價：39元/盒</li><li>規格：37克/盒‧48盒/箱</li><li>素食說明 : 蛋奶素</li>',
 '<li>售價：179元/盒</li><li>規格：195克/盒‧10盒/箱</li><li>素食說明 : 蛋奶素</li>'],
 ['<li>售價：49元/盒</li><li>規格：48克/盒</li><li>素食說明 : 蛋奶素</li>',
 '<li>售價：179元/盒</li><li>規格：195克/盒‧10盒/箱</li><li>素食說明 : 蛋奶素</li>'],
 ['<li>售價：109元/盒</li><li>規格：111克/盒‧10盒/箱</li><li>素食說明 : 蛋奶素</li>',
 '<li><li>售價：15元/包</li><li>規格：14克/包‧9包/盒‧16盒/箱</li><li>素食說明 : 蛋奶素</li>'],
 ['<li>售價：299元/盒</li><li>規格：288克/盒 ‧ 10盒/箱</li><li>素食說明 : 蛋奶素</li>',
 '<li><li>售價：16元/包</li><li>規格：14克/包‧9包/盒‧16盒/箱</li><li>素食說明 : 蛋奶素</li>'],
  ['<li>售價：289元/盒</li><li>規格：244克/盒 ‧ 6盒/箱</li><li>素食說明 : 蛋奶素</li>',
 '<li>售價：108元/包</li><li>規格：136.5公克/盒,16盒/箱</li><li>素食說明 : 蛋奶素</li>'],
['<li>售價：108元/包</li><li>規格：126公克/盒,16盒/箱</li><li>素食說明 : 蛋奶素</li>',
 '<li>售價：15元/包</li><li>規格：14克/包‧9包/盒‧16盒/箱</li><li>素食說明 : 蛋奶素</li>'],
 ['<li>售價：179元/盒</li><li>規格：195克/盒‧10盒/箱</li><li>素食說明 : 蛋奶素</li>',
 '<li><li>售價：299元/盒</li><li>規格：288克/盒 ‧ 10盒/箱</li><li>素食說明 : 蛋奶素</li>']
]
//初始化，点击的时候进去的都是图片的第一张；
for(var i=0;i<main_lis.length;i++){
	main_lis[i].index = i;
	main_lis[i].onOff = true;
	main_lis[0].onOff = false;
	main_lis[i].onclick = function(){
		for( var i=0; i<main_lis.length; i++ ){
			main_lis[i].onOff = true;
		}
		title.innerHTML = arrAA[this.index];
		pimg.src = 'imgs/product/'+arrCC[this.index][0];
		content.innerHTML = arrBB[this.index][0];
		str = arrDD[this.index][0];
		type.innerHTML = str;
		this.onOff = false;
		//默认值设置
		cate_1.onclick();
	}	
}
cate_2.onclick = function(){
	for( var i=0; i<main_lis.length; i++ ){
		if( !main_lis[i].onOff ){
			change2(main_lis[i].index);
		}
	}
};
cate_1.onclick = function(){
	for( var i=0; i<main_lis.length; i++ ){
		if( !main_lis[i].onOff ){
			change1(main_lis[i].index);
		}
	}
};
