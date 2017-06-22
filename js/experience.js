/**
 * Created by j on 2017/6/20.
 */
$(function(){

    $('#openApp').on('click',function(e){
        var ifr = document.createElement('iframe');
        ifr.style.display = 'none';
        var timer;
        if(/android/i.test(navigator.userAgent)){
            document.body.appendChild(ifr);
            ifr.src = "xl://ymh:8888/FirstActivity";//Android app协议
            $(document).on('visibilitychange webkitvisibilitychange', function() {
                var tag = document.hidden || document.webkitHidden;
                if (tag) {
                    clearTimeout(timer);
                }
            })
            $(window).on('pagehide', function() {
                clearTimeout(timer);
            })
            timer=setInterval(function(){
                document.body.removeChild(ifr);
                window.location.href = "http://itunes.apple.com/cn/app/yu-mei-hui-ke-hu-duan/id1161081835?mt=8";
            },1000)
        };
        if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
            window.location.href = "testYMH://";//ios app协议
            $(document).on('visibilitychange webkitvisibilitychange', function() {
                var tag = document.hidden || document.webkitHidden;
                if (tag) {
                    clearTimeout(timer);
                }
            })
            $(window).on('pagehide', function() {
                clearTimeout(timer);
            })

            timer=setInterval(function(){
                window.location.href = "http://itunes.apple.com/cn/app/yu-mei-hui-ke-hu-duan/id1161081835?mt=8";
            },1000)

        }
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
/*
var openUrl='testYMH://'
var openApp = function(callback) {
    //检查app是否打开
    function checkOpen(cb){
        var _clickTime = +(new Date());
        function check(elsTime) {
            if ( elsTime > 3000 || document.hidden || document.webkitHidden) {
                cb(1);
            } else {
                cb(0);
            }
        }
        //启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
        var _count = 0, intHandle;
        intHandle = setInterval(function(){
            _count++;
            var elsTime = +(new Date()) - _clickTime;
            if (_count>=100 || elsTime > 3000 ) {
                clearInterval(intHandle);
                check(elsTime);
            }
        }, 20);
    }

    //在iframe 中打开APP
    var ifr = document.createElement('iframe');
    ifr.src = openUrl;
    ifr.style.display = 'none';

    if (callback) {
        //客户端检测微信直接跳应用宝链接
        var browser = BrowserInfo();
        //使用微链接
        var encodeUri = encodeURIComponent(openUrl);

        if (browser.isWeixin) {
            window.location.href = '你的微链url&android_schema='+encodeUri;
        }else{
            checkOpen(function(opened){
                callback && callback(opened);
            });

        }
    }

    document.body.appendChild(ifr);
    setTimeout(function() {
        document.body.removeChild(ifr);
    }, 2000);

};
var BrowserInfo = function() {
    var json = {
        userAgent: navigator.userAgent.toLowerCase(),
        isAndroid: Boolean(navigator.userAgent.match(/android/ig)),
        isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),
        isIpad: Boolean(navigator.userAgent.match(/ipad/ig)),
        isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),
    };

    return json;
};*/
