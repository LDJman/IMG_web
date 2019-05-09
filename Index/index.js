function init() {
    var windoww = window.innerWidth;//获取屏幕宽度
    if (windoww > 480) {
        var content = document.getElementsByClassName("content");
        var contenttwo = document.getElementsByClassName("contenttwo");
        document.addEventListener("scroll", function () {
            //滚动高度+视窗高度一半
            var visibleBottom = window.scrollY + document.documentElement.clientHeight / 2;
            //滚动高度
            var visibleTop = window.scrollY;
            for (var i = 0; i < content.length; i++) {
                var centerY = content[i].offsetTop + (content[i].offsetHeight / 2);
                if (centerY > visibleTop && centerY < visibleBottom) {
                    content[i].children[0].style.animation = "picin 3s linear";
                }
            }
            for (var j = 0; j < contenttwo.length; j++) {
                var centerY = contenttwo[j].offsetTop + (contenttwo[j].offsetHeight / 2);
                if (centerY > visibleTop && centerY < visibleBottom) {
                    contenttwo[j].children[1].style.animation = "pictwoin 3s linear";
                }
            }
        })
    }
    var title = document.getElementsByClassName("title");//让每节标题下划线自适应
    var title_t = title[0].children[0].offsetWidth;
    for (var i = 0; i < title.length; i++) {
        title[i].style.width = title_t * 1.2 + "px";
    }
}
init();//打开页面即启动
Window.onresize = function(){
    init();//页面拉动自适应
}

