/**
 * Created by j on 2017/6/28.
 */
(function(){
    var viewW=document.documentElement.clientWidth;
    var html=document.documentElement;
    var rem=viewW/6.4;
    html.style.fontSize=rem+'px'
})();
/*
$(function(){
    $(window).scroll(function(){
        var propH=$(document).height()/!*+$(window).scrollTop()*!/;
        $('.prop').css('height',propH);
        $('.guidePage').css('height',propH);
    });
});
*/
var app=angular.module('app',['ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider,$urlRouterProvider){
    //默认路由到mainTab
    $urlRouterProvider.when('', '/yanzhen');
    $stateProvider
        //主页面路由
        .state('yanzhen',{
            url: '/yanzhen',
            views:{'':{
                templateUrl: 'templates/yanzhen/yanzhen.html',
                controller:'yanzhenCtrl'
                }
            }
        })

        .state('experience', {
            url: '/experience',
            views:{'':{
                templateUrl: 'templates/experience/experience.html',
                controller:'experienceCtrl'
                }
            }
        })
}])
app.factory('open',function(){
    return {
/*
        openApp:function(){
           var timer=null;
           if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
               // console.log(111)
               if(/MicroMessenger/ig.test(navigator.userAgent)||/qq/ig.test(navigator.userAgent)){
                   $('.guidePage').show();
               }else {
                   $('.guidePage').hide();
                   window.location.href = "testYMH://";//ios app协议
                   timer=setInterval(function(){
                       window.location.href = "itms-apps://itunes.apple.com/cn/app/yu-mei-hui-ke-hu-duan/id1161081835?mt=8";
                   },1000)

               }
           };
           if(/android/i.test(navigator.userAgent)){
               window.location.href= "xl://ymh:8888/FirstActivity";//Android app协议
               timer=setInterval(function(){
                   window.location.href = "itms-apps://itunes.apple.com/cn/app/yu-mei-hui-ke-hu-duan/id1161081835?mt=8";
               },1000)
           };
           $(window).onload(function(){
               clearInterval(timer)
           })
       },
*/
        submitApp:function(){
            //判断浏览器
            var d = new Date();
            var t0 = d.getTime();
            if(/android/i.test(navigator.userAgent)){
                //Android
                if(this.openApp('xl://ymh:8888/FirstActivity')){
                    this.openApp('xl://ymh:8888/FirstActivity');
                }else{
                    //由于打开需要1～2秒，利用这个时间差来处理－－打开app后，返回h5页面会出现页面变成app下载页面，影响用户体验
                    var delay = setInterval(function(){
                        var d = new Date();
                        var t1 = d.getTime();
                        if( t1-t0<3000 && t1-t0>2000){
                            window.location.href = "http://zhushou.360.cn/detail/index/soft_id/3539022?recrefer=SE_D_%E4%B8%8E%E7%BE%8E%E6%B1%87";
                        }
                        if(t1-t0>=1000){
                            clearInterval(delay);
                        }
                    },1000);
                }
            }
            if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
                //IOS

                if( this.openApp('testYMH://')){
                    this.openApp('testYMH://');
                }else{
                    var delay = setInterval(function(){
                        var d = new Date();
                        var t1 = d.getTime();
                        if( t1-t0<3000 && t1-t0>2000){
                            window.location.href ="itms-apps://itunes.apple.com/cn/app/yu-mei-hui-ke-hu-duan/id1161081835?mt=8";
                        }
                        if(t1-t0>=1000){
                            clearInterval(delay);
                        }
                    },1000);
                }
            }
        },
        openApp:function(src) {
            window.location.href=src;
        }

    }
});

app.factory('scroll',function(){
    return {
        height:function(){
            /*var propH=$('.header').height()+$('.inner').height();*/
            var propH=$(document).height()+$(document).scroll().offsetTop;
            $('.prop').css('height',propH);
            $('.guidePage').css('height',propH);
        }
    }
});

