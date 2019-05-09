var windoww = window.innerWidth;//获取屏幕宽度
var live = document.getElementsByClassName("live")[0];
if (windoww > 480) {
    document.addEventListener("scroll", function () {
         //滚动高度+视窗高度一半
         var visibleBottom = window.scrollY + document.documentElement.clientHeight/2;
         //滚动高度
         var visibleTop = window.scrollY;
         var centerY = live.children[1].offsetTop + (live.children[1].offsetHeight/2);
         if(centerY > visibleTop && centerY < visibleBottom){
            live.children[1].style.animation = "pictwoin 3s linear";
        }
    })
}
function tolive_in(){//点击进入直播三级页面
    window.location = "../Live_in/live_in.html";
}
var live_app = document.getElementsByClassName("live_app")[0];
live_app.onclick = function(){
    tolive_in();
}
live.onclick = function(){
    tolive_in();
}