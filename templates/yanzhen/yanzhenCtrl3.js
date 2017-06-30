/**
 * Created by j on 2017/6/28.
 */
var urlSend='http://114.55.140.250/mes/front/send';
var urlVal='http://114.55.140.250/mes/front/validation';
app.controller("yanzhenCtrl",function ($scope,scroll,open,$http){

    scroll.height();
    if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
        if(/MicroMessenger/gi.test(navigator.userAgent)||/qq/ig.test(navigator.userAgent)) {
            // 引导用户在浏览器中打开
            $('.guidePage').show();
            return;
        }else {
            $scope.openAPP=function(){
                open.submitApp();
            };
        }
    }
    else {
        $scope.openAPP=function(){
            open.submitApp();
        };

    }


    $scope.sends = {
        checked:1,
        //获取验证码
        send:function(phoneNum){
            var salt=this.RandomUtil();
            var key = "daoyintech";
            var message ="appname=ymh&" + "salt=123456&phone=15198289750&action=register";
            var enResult = strEnc(message,key);
            var hash=this.stringToHex (enResult);
            var hashBase64=this.hexToString(hash)
            var bb='OW/JCHO2zctQZChQpbTWaHVEL/YyoZMEGgjAfpf9xX696fx0d+VK9SzPqzTI8JWf6/LOXt5de4x5zMj6dQWy2g=='
            //console.log(bb.length)
            var deResult = strDec(hashBase64,key)
            console.log(enResult)
            console.log(hash)

            console.log(hashBase64)
            console.log(deResult)
            $http.post(urlSend+"?hash="+hash+"&salt="+salt
            ,function(data){
                $('.prop').show();
                $('.prop .prop1').show().siblings().hide();
                console.log(data)
            })
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
        },
        //随机生成6位数的salt;
        RandomUtil:function(){
            var arr=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            var str='';
            // 随机产生
            for(var i=0;i<6;i++){
                var pos = Math.floor(Math.random()*arr.length);
                console.log(pos)
                str+= arr[pos];
            }
            return str;
        },
        //hash的DES加密；

        //base64编码
        stringToHex:function(s){
            var b = new Base64();
            var str = b.encode(s);
            //console.log("base64 encode:" + str);
            return str
        },
        //base64解码
        hexToString:function (h) {
        var b = new Base64();
        var str = b.decode(h);
        //console.log("base64 decode:" + str);
        return str
    }

};

})