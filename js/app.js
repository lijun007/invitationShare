/**
 * Created by j on 2017/6/28.
 */
(function(){
    var viewW=document.documentElement.clientWidth;
    var html=document.documentElement;
    var rem=viewW/6.4;
    html.style.fontSize=rem+'px'
})();


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
            url: '/experience:phoneNum',
            views:{'':{
                templateUrl: 'templates/experience/experience.html',
                controller:'experienceCtrl'
                }
            }
        })
        .state('userRole', {
            url: '/userRole',
            views:{'':{
                templateUrl: 'templates/userRole/userRole.html',

                }
            }
        })
}])
app.factory('open',function(){
    return {
        submitApp:function(){
            //判断浏览器
            var d = new Date();
            var t0 = d.getTime();
            if(/android/i.test(navigator.userAgent)){
                //Android
                var ifr = document.createElement('iframe');
                ifr.src = 'xl://ymh:8888/FirstActivity';
                ifr.style.display = 'none';
                document.body.appendChild(ifr);
                //由于打开需要1～2秒，利用这个时间差来处理－－打开app后，返回h5页面会出现页面变成app下载页面，影响用户体验
                var delay = setInterval(function(){
                    document.body.removeChild(ifr);
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
        },

    }
});

app.factory('scroll',function(){
    return {
        height:function(){
/*
           $('.guidePage').bind('touchmove',function(e){
               e.preventDefault()
           })
*/
           $('.prop').bind('touchmove',function(e){
               e.preventDefault()
           })
        }
    }
});


