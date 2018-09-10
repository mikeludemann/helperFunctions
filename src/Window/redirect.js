function redirect(url) {

    window.location.replace(url);
    
}

function redirectTimer(url, time){
    
    setTimeout("window.location.href = " + url , time );

}