/**
 * Created by j on 2017/6/20.
 */
$(function(){

    $('#openApp').click(function(e){
        var ifr = document.createElement('iframe');
        //ifr.src = 'testYMH';
        ifr.style.display = 'none';
        document.body.appendChild(ifr);
        window.setTimeout(function(){
            document.body.removeChild(ifr);
        },3000)
    })

/*
    $('#openApp').click(function(e){

        if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i))
        {
            window.location.href = "testYMH";//ios app协议
            window.setTimeout(function() {
                window.location.href = "itms-app://itunes.apple.com/cn/app/yu-mei-hui-ke-hu-duan/id1161081835?mt=8";
            }, 2000)
        }
/!*
        if(navigator.userAgent.match(/android/i))
        {
            window.location.href = "com.baidu.tieba://app";//android app协议
            window.setTimeout(function() {
                window.location.href = "https://!****.apk";//android 下载地址
            }, 2000)
        }
*!/
    });
*/
})