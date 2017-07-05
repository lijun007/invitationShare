/**
 * Created by j on 2017/6/28.
 */

app.controller("experienceCtrl",function ($scope,scroll,open,$stateParams){
    $scope.phoneNum=$stateParams.phoneNum;
    console.log($scope.phoneNum)
    scroll.height()
/*
    if(/MicroMessenger/gi.test(navigator.userAgent)||/qq/ig.test(navigator.userAgent)) {
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
            // 引导用户在浏览器中打开
            $('.guidePage').show();
        }
        if(/android/i.test(navigator.userAgent)) {
            $scope.openAPP=function(){
                open.submitApp();
            };
        }
    }
    else {
*/
        $scope.openAPP=function(){
            open.submitApp();
        };
    //}

    $scope.sends = {
        checked:1,
        //活动规则
        role:function(){
            //console.log(3)
            $('.prop').show();
            $('.prop .prop2').show().siblings().hide();
        },
        //关闭弹窗
        close:function(){
            //console.log(2)
            $('.prop').hide()
        },
        //微信弹窗
        wx:function(){
            console.log(212)
            $('.prop').show();
            $('.prop .prop3').show().siblings().hide();
        },
        closeWX:function(){
            console.log(321)
            $('.prop').hide();
        }
    };

});

