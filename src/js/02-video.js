import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";


const onPlay = function(time) {
localStorage.setItem(STORAGE_KEY, time.seconds);
};
player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0.000001);
player.on('timeupdate', throttle((onPlay), 1000));




