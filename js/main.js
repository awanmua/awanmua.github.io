function musicPlay(isPlay) {
    var media = document.querySelector('#audioDom');
    if (isPlay && media.paused) {
        media.play();
    }
    if (!isPlay && !media.paused) {
        media.pause();
    }
    media.volume = 0.5;
}
function musicInBrowserHandler() {
    setTimeout(function () {
        musicPlay(true)
    }, 2000)
    setTimeout(function () {
        startF();
    }, 3000)

    setTimeout(() => {
        fireworks();
    }, 5000) // 这里的5000 是5s指烟花延时时间
    setTimeout(() => {
        function audioAutoPlay() {
            var audio = document.getElementById('#audioDom');
            audio.play();
        }
        audioAutoPlay();
    }, 5000) // 这里的5000 是5s指音乐延时时间
    console.log(updateConfig({ autoLaunch: true }));
}
document.body.addEventListener('click', musicInBrowserHandler);
 
function fireworks() {
    $('.page_one').addClass('hide');
    $('.page_two').removeClass('hide');
    $('.page_two').fireworks({
        sound: false,
        opacity: 1,
        width: '100%',
        height: '100%'
    });
}

