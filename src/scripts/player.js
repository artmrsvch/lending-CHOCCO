let player;

const formatTime = timeSec => {
  const roundTime = Math.round(timeSec);

  const minutes = Math.floor(roundTime / 60);
  const seconds = roundTime - minutes * 60;

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${formattedSeconds}`;
};

const onPlayerReady = () => {
  let interval;
  let durationSec = player.getDuration();

  $(".controls-duration__estimate").text(formatTime(durationSec));

  if (typeof interval !== "undefined") {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    const completedSec = player.getCurrentTime();
    const completedPercent = (completedSec / durationSec) * 100;

    $(".controls-runner__btn").css({
      left: `${completedPercent}%`
    });

    $(".controls-duration__complited").text(formatTime(completedSec));
  }, 1000);
};

const eventsInit = () => {
  $(".controls-play").on("click", e => {
    e.preventDefault();
    const btn = $(e.currentTarget);

    if (btn.hasClass("controls-play_paused")) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  });

  $(".controls-runner").on("click", e => {
    const bar = $(e.currentTarget);
    const newButtonPosition = e.pageX - bar.offset().left;
    const buttonPosPercent = (newButtonPosition / bar.width()) * 100;
    const newPlayerTimeSec = (player.getDuration() / 100) * buttonPosPercent;

    $(".controls-runner__btn").css({
      left: `${buttonPosPercent}%`
    });

    player.seekTo(newPlayerTimeSec);
  });

  $(".player__splash").on("click", e => {
    player.playVideo();
  });
};


let volPosPercent;
$(".controls-volume").on("click", e => {
  const vol = $(e.currentTarget);
  const newVolumePosition = e.pageX - vol.offset().left;
  volPosPercent = (newVolumePosition / vol.width()) * 100;

  $(".controls-volume__btn").css({
    left: `${volPosPercent}%`
  });

  player.setVolume(volPosPercent);
  if(volPosPercent <= 0){
    $('.controls-mute').addClass('controls-mute_novolume');
  } else {
    $('.controls-mute').removeClass('controls-mute_novolume');
    player.unMute()
  }

});
$('.controls-mute').on('click', function muteControl(eb) {
  eb.preventDefault();
  const btnMute = $(eb.currentTarget);
  if(!btnMute.hasClass('controls-mute_novolume')){
    $('.controls-mute').addClass('controls-mute_novolume');
    player.mute();
    $(".controls-volume__btn").css({
      left: `0`
    });
  } else {
    if(volPosPercent > 0){
      player.unMute()
      $(".controls-volume__btn").css({
        left: `${volPosPercent}%`
      });
      $('.controls-mute').removeClass('controls-mute_novolume');
    } 
  }
});


const onPlayerStateChange = event => {
  const playerButton = $(".controls-play");
  /*
  -1 (воспроизведение видео не начато)
  0 (воспроизведение видео завершено)
  1 (воспроизведение)
  2 (пауза)
  3 (буферизация)
  5 (видео подают реплики).
   */
  switch (event.data) {
    case 1: 
      $('.player__wrapper').addClass('player__wrapper_active');
      $('.player__screen').addClass('player__screen_disable');
      playerButton.addClass("controls-play_paused");
      break;
    case 2: 
      $('.player__wrapper').removeClass('player__wrapper_active');
      playerButton.removeClass("controls-play_paused");
      break;
  }
};

function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "405",
    width: "660",
    videoId: "zmg_jOwa9Fc",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    },
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    }
  });
}

eventsInit();