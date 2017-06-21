/**
 * Created by j on 2017/6/20.
 */
$(function(){

    $('#openApp').click(function(e){
        var ifr = document.createElement('iframe');
        ifr.src = 'testYMH://';
        ifr.style.display = 'none';
        document.body.appendChild(ifr);
        window.setTimeout(function(){
            document.body.removeChild(ifr);
        },3000)
    })

})
