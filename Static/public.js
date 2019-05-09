function online() {
    if (document.getElementsByTagName("nav")[0].offsetWidth > 480) {
        var navh = document.getElementsByTagName("nav")[0].offsetWidth * 0.08;
        document.getElementsByTagName("nav")[0].style.height = navh + "px";
    }
    var end_stdw0 = document.getElementsByClassName("end_st")[0].children[0].offsetWidth;//调整底部导航条居中
    var end_stdw1 = document.getElementsByClassName("end_st")[0].children[1].offsetWidth;
    var end_stdw2 = document.getElementsByClassName("end_st")[0].children[2].offsetWidth;
    var end_st = document.getElementsByClassName("end_st")[0];
    end_st.style.width = end_stdw0+end_stdw1+end_stdw2+3+"px";
}
online()
window.onresize = function () {//屏幕变化时也适应 
    online()
}
var nav_list_app = document.getElementsByClassName("nav_list_app")[0];
var num = 0;
nav_list_app.onclick = function () {//移动端点击切换上下拉菜单
    num++;
    if (this.style.backgroundImage == 'url("../Static/img/nav_title_open.png")' || num == 1) {
        this.style.backgroundImage = "url('../Static/img/nav_title_close.png')"
        document.getElementsByClassName("app_nav_list")[0].style.display = "block";
    } else {
        this.style.backgroundImage = "url('../Static/img/nav_title_open.png')"
        document.getElementsByClassName("app_nav_list")[0].style.display = "none";
    }
}
var pop = document.getElementsByClassName("pop")[0];
var l_and_r = document.getElementsByClassName("l_and_r");
for (var j = 0; j < l_and_r.length; j++) {
    l_and_r[j].onclick = function () {
        document.getElementsByClassName("app_nav_list")[0].style.display = "none";
        nav_list_app.style.backgroundImage = "url('../Static/img/nav_title_open.png')"
        pop.style.display = "flex";
        pop.style.height = window.innerHeight;//弹窗适应屏幕占满高度
        var pop_out = document.getElementsByClassName("pop_out")[0];
        var pop_close = document.getElementsByClassName("pop_close")[0];
        var pop_menu = document.getElementsByClassName("pop_menu")[0];
        var pop_l = document.getElementsByClassName("pop_l")[0];
        var pop_r = document.getElementsByClassName("pop_r")[0];
        var pop_input;
        var pop_l_input = document.getElementsByClassName("pop_l_input")[0];
        var pop_r_input = document.getElementsByClassName("pop_r_input")[0];
        pop_input = pop_l_input;
        pop_l.onclick = function(){
            pop_r_input.style.display = "none";
            pop_l_input.style.display = "block";
            pop_input = pop_l_input;
            this.childNodes[1].style.borderBottom = "3px solid black";
            pop_r.childNodes[1].style.borderBottom = "none";
        }
        pop_r.onclick = function(){
            pop_r_input.style.display = "block";
            pop_l_input.style.display = "none";
            pop_input = pop_r_input;
            this.childNodes[1].style.borderBottom = "3px solid black";
            pop_l.childNodes[1].style.borderBottom = "none";
        }
        var tips = document.getElementsByClassName("tips")[0];
        var llogo = document.getElementsByClassName("llogo")[0];
        llogo.style.height = pop_out.offsetHeight - pop_close.offsetHeight - pop_menu.offsetHeight - pop_input.offsetHeight - tips.offsetHeight - pop_out.offsetHeight * 0.08 + "px";//让第三方登陆图标垂直居中
        pop_close.onclick = function () {
            pop.style.display = "none";
        }
        var bt =  document.getElementsByClassName("bt")[0];
        var rbt =  document.getElementsByClassName("rbt")[0];  
        bt.onclick = function(){
            window.location = "../Index/index.html"
        } 
        rbt.onclick = function(){
            window.location = "../Index/index.html"
        }      
    }
}