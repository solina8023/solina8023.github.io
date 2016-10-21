var box5 = document.getElementsByClassName('box5')[0];
box5.onclick = function(){
	embed();
}
function embed(){
    $('<embed allowFullScreen="true" id="embedid"  quality="high" width="620" height="500"  type="application/x-shockwave-flash" src="http://v.youku.com/v_show/id_XMTY3NTkyMzIwNA==.html?from=s1.8-1-1.2&spm=a2h0k.8191407.0.0').appendTo('.box5');
};