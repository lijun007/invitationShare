/**
 * Created by j on 2017/6/28.
 */
//var urlSend='http://localhost/mes/front/send';
var urlSend='http://114.55.140.250/mes/front/send';
//var urlVal='http://localhost/mes/front/validation';
var urlVal='http://114.55.140.250/mes/front/validation';
//var urlReg='http://localhost/user/invitationRegister.do';
var urlReg='http://114.55.140.250/user/invitationRegister.do';
var url='http://restapi.amap.com/v3/ip?ip=&output=xml&key=907e63b14492f7e9b16a50775d811280';
app.controller("yanzhenCtrl",function ($scope,scroll,open,$http,$state){
    scroll.height();
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
        //获取验证码
        send:function(){
            var salt=this.RandomUtil();
            var key = "daoyintech";
            var ivKey='yumeihu1';
            var phone=$scope.num;
            var message ="appname=ymh&salt="+salt+"&phone="+phone+"&action=register";
            var keyHex = CryptoJS.enc.Utf8.parse(key);
            var ivHex = CryptoJS.enc.Utf8.parse(ivKey);

            //加密
            var hash=this.encrypted(message,keyHex,ivHex)
            //解密
            var deHash=this.decrypted(hash,keyHex,ivHex)
            //console.log(hash)
            //console.log(deHash)

            $http.post(urlSend+"?hash="+hash+"&salt="+salt).success(function(data){

                if(data.msg==='该手机号已经注册，请直接登录'){
                    $('.prop').show();
                    $('.prop .prop1').show().siblings().hide();
                    clearInterval(timer)
                }

            });

            //获取验证码倒计时
            var numbers = /0?(13|14|15|18|17)[0-9]{9}/;
            var val = $('#phone').val().replace(/\s+/g, "");//获取输入手机号码
            if (!numbers.test(val) || val.length === 0) {
                $('.error1').show()
            }
            var timer;
            if (numbers.test(val)) {
                $('.getNum').attr('disabled', 'disabled');
                $('.error1').hide()
                var time = 30;
                timer = setInterval(function () {
                    time--;
                    $('.getNum').val(time + "S后再次发送");
                    if (time === 0) {
                        clearInterval(timer);

                        $('.getNum').val("获取验证码");

                        $('.getNum').attr('disabled', false)
                    }
                }, 1000);
            }
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
                str+= arr[pos];
            }
            return str;
        },
        //加密
        encrypted:function(message,keyHex,ivHex){
            var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
                iv:ivHex,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            return encrypted.toString().replace(/\+/g,"%2B");
        },
        //解密
        decrypted:function(hash,keyHex,ivHex){
            var decrypted = CryptoJS.DES.decrypt({
                ciphertext: CryptoJS.enc.Base64.parse(hash)
            }, keyHex, {
                iv:ivHex,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            return decrypted.toString(CryptoJS.enc.Utf8);
        },
        //领取金币
        getGold:function(){
            var _this=this;
            $http.post(urlVal+"?phone="+$scope.num+"&SmsCheckCodeVal="+$scope.SmsCheckCodeVal).success(function(data){
                //console.log(data)
                if(data.result==0){
                    $('.error2').show();
                    return
                }else {
                    $('.error2').hide();
                    _this.password();
                }
                //console.log($scope.num)
                //console.log($scope.SmsCheckCodeVal)
            })
        },
        //输入密码条件限制
        password:function(){
            var pw=/^[a-zA-Z0-9]{6,16}$/;
            if(!pw.test($scope.pw)){
               $('.error3').show()
            }else {
                $('.error3').hide();
                var pass=hex_md5($scope.pw);
                var test=window.location.search;
                var invitation=test.substr(test.indexOf("=")+1,8);
                $http.post(url).success(function(data){
                    var regarea_id=data.adcode
                    $http.post(urlReg+"?invitation="+invitation+"&pwd="+pass+"&mobile="+$scope.num+"&type=1&status=0&divice_type=wap&regarea_id="+regarea_id).success(function(){
                        $state.go('experience',{phoneNum:$scope.num});
                    });
                });
            }
        }
    };

})