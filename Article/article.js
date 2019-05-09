function init(){//使标题下方的横线为标题的宽的宽度适应
    var new_btw=document.getElementsByClassName("new_bt")[0].children[0].offsetWidth;
    var new_h = document.getElementsByClassName("new_h");
    for(var i = 0;i<new_h.length;i++){
        new_h[i].style.width = new_btw*0.6+"px";
    }
}
init();
window.onresize = function(){
    init();
}