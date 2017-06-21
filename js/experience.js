/**
 * Created by j on 2017/6/20.
 */
$(function(){
/*
    document.getElementById('openApp').onclick = function(e){
        // 通过iframe的方式试图打开APP，如果能正常打开，会直接切换到APP，并自动阻止a标签的默认行为
        // 否则打开a标签的href链接
        var ifr = document.createElement('iframe');
        ifr.src = 'testYMH';
        ifr.style.display = 'none';
        document.body.appendChild(ifr);
        window.setTimeout(function(){
            document.body.removeChild(ifr);
        },3000)
    };
*/

    document.getElementById('openApp').onclick = function(e){

        if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i))
        {
            window.location.href = "testYMH";//ios app协议
            window.setTimeout(function() {
                window.location.href = "itms-app://itunes.apple.com/cn/app/yu-mei-hui-ke-hu-duan/id1161081835?mt=8";
            }, 2000)
        }
/*
        if(navigator.userAgent.match(/android/i))
        {
            window.location.href = "com.baidu.tieba://app";//android app协议
            window.setTimeout(function() {
                window.location.href = "https://!****.apk";//android 下载地址
            }, 2000)
        }
*/
    };

})