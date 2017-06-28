/**
 * Created by j on 2017/6/28.
 */
(function(){
    var viewW=document.documentElement.clientWidth;
    var html=document.documentElement;
    var rem=viewW/6.4;
    html.style.fontSize=rem+'px'
})();
$(function(){
    $(window).scroll(function(){
        var propH=$(document).height()/*+$(window).scrollTop()*/;
        $('.prop').css('height',propH);
        $('.guidePage').css('height',propH);
    });
});
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
       }
    }
});
/*
app.factory('scroll',function(){
    return {
        height:function(){
            var propH=$(document).height();
            $('.prop').css('height',propH);
            $('.guidePage').css('height',propH);
        }
    }
});*/
