/**
 * Created by j on 2017/6/20.
 */
$(function(){
    $(window).scroll(function(){
        var propH=$(document).height()/*+$(window).scrollTop()*/;
        $('.prop').css('height',propH);

    });

    var timer
    $('#openApp').on('click',function(e){
        var ifr = document.createElement('iframe');
        ifr.style.display = 'none';

        if(/android/i.test(navigator.userAgent)){

            window.location.href= "xl://ymh:8888/FirstActivity";//Android app协议
           timer=setInterval(function(){
                window.location.href = "itms-apps://itunes.apple.com/cn/app/yu-mei-hui-ke-hu-duan/id1161081835?mt=8";
            },1000)
        };
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
            // console.log(111)
            if(/MicroMessenger/ig.test(navigator.userAgent)||/qq/ig.test(navigator.userAgent)){
                $('.guidePage').show();

            }else {
                $('.guidePage').hide();
                window.location.href= "testYMH://";//ios app协议
                $(window).on('visibilityChange','pagehide',function(){
                    clearInterval(timer)
                })

                timer=setInterval(function(){
                    window.location.href = "itms-apps://itunes.apple.com/cn/app/yu-mei-hui-ke-hu-duan/id1161081835?mt=8";
                },1000)

            }
        };
        /*
                if(/android/i.test(navigator.userAgent)){
                    window.location.href = "xl://ymh:8888/FirstActivity";//Android app协议
                    window.setTimeout(function(){
                        //
                       // window.location.href = "http://itunes.apple.com/cn/app/yu-mei-hui-ke-hu-duan/id1161081835?mt=8";
                    },3000)

                }
                if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
                    window.location.href = "testYMH://";//ios app协议
                    window.setTimeout(function(){
                        // document.body.removeChild(ifr);
                        window.location.href = "http://itunes.apple.com/cn/app/yu-mei-hui-ke-hu-duan/id1161081835?mt=8";
                    },3000)
                }
        */
    })

})

var sends = {
    checked:1,
    //活动规则
    role:function(){
        console.log(3)
        $('.prop').show();
        $('.prop .prop2').show().siblings().hide();
    },
    //关闭弹窗
    close:function(){
        console.log(2)
        $('.prop').hide()
    }
};
