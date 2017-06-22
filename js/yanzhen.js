/**
 * Created by j on 2017/6/20.
 */
$(function(){
    $(window).scroll(function(){
        var propH=$(window).height()+$(window).scrollTop();
        $('.prop').css('height',propH);
        $('.guidePage').css('height',propH);

    });
    if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
        if(/MicroMessenger/i.test(navigator.userAgent)||navigator.userAgent.indexOf('QQBrowser') !== -1){
            $('.guidePage').show();
        }else {
            $('.guidePage').hide();
        }
    }
});
var sends = {
    checked:1,
    //获取验证码
    send:function(){
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
    },
    //活动规则
    role:function(){
        console.log(3)
        $('.prop').show();
        $('.prop .prop2').show().siblings().hide();
    },
    //注册完成
    regFinish:function(){
        console.log(1)
        $('.prop').show();
        $('.prop .prop1').show().siblings().hide();
    },
    //关闭弹窗
    close:function(){
        console.log(2)
        $('.prop').hide()
    }
};

