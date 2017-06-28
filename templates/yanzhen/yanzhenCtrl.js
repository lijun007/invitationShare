/**
 * Created by j on 2017/6/28.
 */
app.controller("yanzhenCtrl",function ($scope){
    $(function(){
        $(window).scroll(function(){
            var propH=$(document).height()/*+$(window).scrollTop()*/;
            $('.prop').css('height',propH);
            $('.guidePage').css('height',propH);
        });
        var timer;
        $('.link .have').on('click',function(){
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
                $(window).on('visibilityChange','pagehide',function(){
                    clearInterval(timer)
                })

                timer=setInterval(function(){
                    window.location.href = "itms-apps://itunes.apple.com/cn/app/yu-mei-hui-ke-hu-duan/id1161081835?mt=8";
                },1000)
            };
        })
    });
    $scope.sends = {
        checked:1,
        //获取验证码
        send:function(){
            $('.prop').show();
            $('.prop .prop1').show().siblings().hide();

            /*
             var numbers = /0?(13|14|15|18|17)[0-9]{9}/;
             var val = $('#phone').val().replace(/\s+/g,"");//获取输入手机号码
             if(!numbers.test(val)||val.length===0){
             $('.error1').show()
             }
             var timer;
             if(numbers.test(val)){
             $('.getNum').attr('disabled','disabled');
             $('.error1').hide()
             var time=30;
             timer=setInterval(function(){
             time--;
             $('.getNum').val(time+"S后再次发送");
             if(time===0){
             clearInterval(timer);

             $('.getNum').val("获取验证码");

             $('.getNum').attr('disabled',false)
             }
             },1000);
             }
             */
        },
        //活动规则
        role:function(){
           // console.log(3)
            $('.prop').show();
            $('.prop .prop2').show().siblings().hide();
        },
        //关闭弹窗
        close:function(){
          // console.log(2)
            $('.prop').hide()
        }
    };

})