function init(){//使标题下方的横线为标题的宽的宽度适应
    var class_btw=document.getElementsByClassName("class_bt")[0].children[0].offsetWidth;
    var class_h = document.getElementsByClassName("class_h");
    for(var i = 0;i<class_h.length;i++){
        class_h[i].style.width = class_btw*0.6+"px";
    }
}
init();
window.onresize = function(){
    init();
}
    