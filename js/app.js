/**
 * Created by j on 2017/6/28.
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